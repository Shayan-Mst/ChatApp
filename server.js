// Convert imports to CommonJS require syntax
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToMongoDB } = require('./db');
const bcrypt = require('bcrypt');
const {generateCode,sendVerificationEmail,storeCode,verifyCode} = require('./verification')
const User = require('./models/users');
const Profile = require('./models/profile');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {verifyToken} = require('./middleware/auth')
const multer = require('multer');
require('dotenv').config();






// The rest of your code remains the same

const app = express();
const server = http.createServer(app);

//CORS Needed to avoid cores error by browser policies
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true, // Allow credentials if needed
  },
});


// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(bodyParser.json({ limit: '10mb' })); // Set limit according to your needs
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
let db; // This will hold the MongoDB connection

const url = 'mongodb://localhost:27017/chatAppDB'; // Replace with your database name

mongoose.connect(url)
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
     
      
      if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

   
      // Generate token
      const token = jwt.sign({ id: user._id, email: user.email },process.env.JWT_SECRET, {
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
chatCollection = db.collection('messages');

io.on('connection', (socket) => {
  console.log('A user connected');

  // Load previous messages between two users
  socket.on('load_messages', async ({ sender, receiver }) => {
    const messages = await chatCollection
      .find({ $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender }
        ]})
      .toArray();
    socket.emit('previous_messages', messages);
  });

  // Handle sending messages
  socket.on('send_message', async (data) => {
    // Save the message to MongoDB
    await chatCollection.insertOne(data);

    // Emit the message to the receiver
    socket.broadcast.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


app.get('/chat-list/:email', async (req, res) => {
  const userEmail = req.params.email;

  try {
    const messages = await db.collection('messages').find({
      $or: [
        { sender: userEmail },
        { receiver: userEmail }
      ]
    }).toArray();

    // Group messages by the other user (sender or receiver, depending on the logged-in user)
    const chatList = {};

    messages.forEach((msg) => {
      const chatWith = msg.sender === userEmail ? msg.receiver : msg.sender;

      // If the conversation doesn't exist, initialize it with this message
      if (!chatList[chatWith]) {
        chatList[chatWith] = msg;
      } else {
        // If a message already exists, replace it only if this one is newer
        if (new Date(msg.time) > new Date(chatList[chatWith].time)) {
          chatList[chatWith] = msg;
        }
      }
    });

    // Send the grouped chat list to the frontend
    res.json(Object.values(chatList));
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/profile/check', async (req, res) => {
  const  email = req.query.email;
  const profile = await Profile.findOne({ email });

  

  if (!profile) {
    return res.status(400).json({message : "no profile found"});
  }

  return res.status(200).json({message: "profile found"});
});


const upload = multer({
    limits: { fileSize: 2 * 1024 * 1024 }, // Set file size limit to 2MB
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('Error: File upload only supports the following filetypes - ' + filetypes);
    }
});


app.post('/api/profile/complete',verifyToken,upload.single('profilePicture'), async (req, res) => {
  
  const { name, bio, birthday , email , userID , profilePicture } = req.body;
  
  console.log(profilePicture)
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Create or update the profile
  const newProfile = new Profile({
    name,
    profilePicture,
    bio,
    birthday,
    email,
    userID
  });

  await newProfile.save();
  res.status(200).json({ message: 'Profile updated successfully' });
});

// Route to get profile data
app.get('/api/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId) // Exclude password for security
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const profile = await Profile.findOne({email : user.email}).select('-_id -__v')

    res.status(200).json({ profile : profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});