const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  _id: String,
  money: { type: Number, default: 0 },
  daily: { type: Date, default: null },
  weekly: { type: Date, default: null },
});

const Balance = mongoose.model('Balance', balanceSchema);

module.exports = Balance;
