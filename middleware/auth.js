// middleware/auth.js
const jwt = require('jsonwebtoken');

 const verifyToken = (req, res, next) => {
  const authHeader =  req.headers['authorization'];
  const token = authHeader.split(' ')[1]
 
  
  if (!token) {
    return res.status(401).json({ message: 'Authorization Failed.' });
  }
  

  try {
    // Verify the token
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.userId = decoded.id; // Assuming the payload contains the user ID
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = {verifyToken}
