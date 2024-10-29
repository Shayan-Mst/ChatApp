// middleware/auth.js
const jwt = require('jsonwebtoken');

 const verifyToken = (req, res, next) => {
  const authHeader =  req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token part
  
  if (!token) {
    return res.status(401).json({ message: 'Authorization Failed.' });
  }
  console.log("JWT Secret:", process.env.JWT_SECRET);

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = {verifyToken}
