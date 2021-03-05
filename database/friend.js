const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const friendSchema = new mongoose.Schema({
  name: String,
  gender: String,
  giftRec: String,
  giftGiv: String,
  bday: Date,
  dateGiv: String,
  dateRec: String,
  comment: String
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;