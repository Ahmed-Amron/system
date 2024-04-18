const mongoose = require('mongoose');

const dailySchema = new mongoose.Schema({
    _id: String,
    money: { type: Number, default: 0 },
    daily: { type: Date, default: null },
});

const Daily = mongoose.model('Daily', dailySchema);

module.exports = Daily;
