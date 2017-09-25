const mongoose = require('mongoose');
const mongoPort = 27017;

const schemas = require('./schemas.js');

mongoose.connect(`mongodb:\/\/localhost/${mongoPort}`);
let db = mongoose.connection;

db.on('error', () => console.log('error occurred in db'));
db.once('open', function() {
  console.log('connected to db!');
});

const Test = mongoose.model('Test', schemas.testSchema);
const Grid = mongoose.model('Grid', schemas.gridSchema);

let carnerosPinot = new Test({
  producer: 'Robert Sinskey Vineyards',
  name: 'Carneros Pinot',
  vintage: '2013',
  varietal: 'Pinot Noir',
  country: 'United States',
  region: 'Napa Valley',
  blind: false
});

let exampleGrid = new Grid({
  sight: {
    clarity: 1,
    concentration: 0,
    rimVariation: false,
  },
  palate: {
    fruit: {
      red: {
        black: false,
        blue: true,
        red: true
      }
    }
  }
});

console.log(JSON.stringify(carnerosPinot));
console.log(JSON.stringify(exampleGrid));

module.exports.db = db;
module.exports.Test = Test;
