const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const familySchema = new mongoose.Schema({
  name: String,
  famType: String,
  giftRec: String,
  giftGiv: String,
  bday: Date,
  dateGiv: String,
  dateRec: String,
  comment: String,
});

const Family = mongoose.model('Family', familySchema);

module.exports = Family;