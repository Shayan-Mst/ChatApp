import express from 'express'; // Ensure to use 'type': 'module' in package.json for ES Modules
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import {connectToMongoDB} from './db.js'
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import { generateCode, sendVerificationEmail, storeCode, verifyCode } from './verification.js'

const app = express();
const server = http.createServer(app);
const io = new Server(server);


// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
let db; // This will hold the MongoDB connection



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

// Simple API endpoint
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
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