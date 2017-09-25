const mongoose = require('mongoose');
const mongoPort = 27017;

mongoose.connect(`mongodb:\/\/localhost/${mongoPort}`);
let db = mongoose.connection;

db.on('error', () => console.log('error occurred in db'));
db.once('open', function() {
  console.log('connected to db!');
});

module.exports = db;
