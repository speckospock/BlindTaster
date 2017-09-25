const mongoose = require('mongoose');
const mongoPort = 27017;

mongoose.connect(`mongodb:\/\/localhost/${mongoPort}`);
let db = mongoose.connection;

db.on('error', () => console.log('error occurred in db'));
db.once('open', function() {
  console.log('connected to db!');
});

const testSchema = mongoose.Schema({
  producer: String,
  year: String,
  varietal: String,
  region: String,
  blind: Boolean
});

const Test = mongoose.model('Test', testSchema);

module.exports = db;
