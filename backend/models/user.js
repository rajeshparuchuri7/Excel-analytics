const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String },
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: String, // hashed password for manual signup
});

module.exports = mongoose.model('User', userSchema);

