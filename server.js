// Convert imports to CommonJS require syntax
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { connectToMongoDB } = require('./db');
const bcrypt = require('bcrypt');
const {generateCode,sendVerificationEmail,storeCode,verifyCode} = require('./verification')
const User = require('./models/users');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



// The rest of your code remains the same

const app = express();
const server = http.createServer(app);
const io = new Server(server);


// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
let db; // This will hold the MongoDB connection



const uri = 'mongodb://localhost:27017/chatAppDB'; // Replace with your database name

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// Connect to MongoDB before starting the server
connectToMongoDB().then(database => {
  db = database;

 // Endpoint to register and send the code
app.post('/register', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  
  // Validate password
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  // Generate and store the code
  const verificationCode = generateCode();
  storeCode(email, verificationCode);

  // Send the verification code to the user's email
  // Assuming you already have the sendVerificationEmail function
  await sendVerificationEmail(email, verificationCode);

  res.status(200).json({ message: 'Verification code sent to your email.' });
});

// Endpoint to verify the code and store the user
app.post('/verify-code', async (req, res) => {
  const { email, code, password } = req.body;

  // Verify the code
  const { valid, message } = verifyCode(email, parseInt(code, 10));

  if (!valid) {
    return res.status(400).json({ message });
  }

  try {
    // Hash the password before storing it in MongoDB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into MongoDB
    const usersCollection = db.collection('userAccount');
    await usersCollection.insertOne({
      email: email,
      password: hashedPassword, // Store the hashed password
    });

    res.status(200).json({ message: 'Registration complete!' });
  } catch (error) {
    res.status(500).json({ message: 'Error storing user:', error });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  
  try {

    
      // Find the user by username
      const user = await User.findOne({ email });
      console.log(user)
      if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate token
      const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', {
          expiresIn: '2h', // Token expiration time
      });

      // Return the token
      return res.status(200).json({ token });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error });
  }
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    // Handle incoming messages here
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});