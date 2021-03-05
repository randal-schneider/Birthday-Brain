const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/bdayBrain';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error: '));

mongoose.connection.once('open', () => {
  console.log('MONGO SMASH');
})

module.exports = db;