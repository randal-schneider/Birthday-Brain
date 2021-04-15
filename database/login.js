const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;