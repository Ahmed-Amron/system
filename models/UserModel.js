const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  // Add any other fields you need for your application
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
