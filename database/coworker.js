const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const coworkerSchema = new mongoose.Schema({
  name: String,
  gender: String,
  giftRec: String,
  giftGiv: String,
  bday: Date,
  dateGiv: String,
  dateRec: String,
  comment: String
});

const Coworker = mongoose.model('Coworker', coworkerSchema);

module.exports = Coworker;