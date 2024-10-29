const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userID: { type: String, unique: true },
  profilePicture: { type: String },
  bio: { type: String },
  birthday: { type: Date },
  profileCompleted: { type: Boolean, default: false }
},{ collection: 'userProfile' });

const Profile = mongoose.model('userProfile', profileSchema);
module.exports = Profile;
