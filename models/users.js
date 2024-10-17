// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},{ collection: 'userAccount' });

const User = mongoose.model('userAccount', userSchema);

module.exports = User;
