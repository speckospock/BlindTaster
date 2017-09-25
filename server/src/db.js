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
  name: String,
  vintage: String,
  varietal: String,
  country: String,
  region: String,
  blind: Boolean
});

const gridSchema = mongoose.Schema({
  sight: {
    clarity: Number, //1-3 clear, hazy, tubid
    concentration: Number, //1-3 pale, medium, deep
    color: {
      white: {
        primary: {
          waterWhite: Boolean,
          straw: Boolean,
          yellow: Boolean,
          gold: Boolean
        },
        secondary: {
          silver: Boolean,
          green: Boolean,
          copper: Boolean
        }
      },
      red: {
        primary: {
          purple: Boolean,
          ruby: Boolean,
          red: Boolean,
          garnet: Boolean
        },
        secondary: {
          orange: Boolean,
          blue: Boolean,
          ruby: Boolean,
          garnet: Boolean,
          brown: Boolean
        }
      }
    },
    rimVariation: Boolean,
    staining: Number, //0-4 none, light, medium, heavy
    tearing: Number, //0-3 light, medium, heavy
    gasEvidence: Boolean
  },
  nose: {
    faults: {
      tca: Boolean,
      h2s: Boolean,
      volatileAcidity: Boolean,
      ethylAcetate: Boolean,
      brett: Boolean,
      oxidation: Boolean
    },
    intensity: Number, //delicate, moderate, powerful
    age: Number, //youthful, developing, vinous
    fruit: {
      red: {
        black: Boolean,
        red: Boolean,
        blue: Boolean,
        other: Boolean
      },
      white: {
        citrus: Boolean,
        apple: Boolean,
        stone: Boolean,
        tropical: Boolean,
        melon: Boolean
      }
    },
    fruitCharacter: {
      tart: Boolean,
      ripe: Boolean,
      fresh: Boolean,
      jammy: Boolean,
      baked: Boolean
    },
    nonFruit: {
      red: {
        floral: Boolean,
        vegetal: Boolean,
        herbal: Boolean,
        mint: Boolean,
        peppercorn: Boolean,
        coffee: Boolean,
        game: Boolean,
        balsamic: Boolean
      },
      white: {

      }
    },
    earth: {
      forest: Boolean,
      compost: Boolean,
      mushroom: Boolean,
      soil: Boolean
    },
    mineral: {
      mineral: Boolean,
      wetStone: Boolean,
      limestone: Boolean,
      chalk: Boolean,
      slate: Boolean,
      flint: Boolean
    },
    wood: {
      present: Boolean,
      old: Boolean,
      large: Boolean,
      french: Boolean
    }
  },
  palate: {
    structure: {
      //1-5 for low, medium-, medium, medium+, high
      tannin: Number,
      acid: Number,
      alcohol: Number,
    },
  },
  conclusion: {
    grape: String,
    oldWorld: Boolean,
    climate: Number, //cool, moderate, warm
    country: String,
    age: Number //1-3 years, 4-6 years, 7+ years
  }

});

const Test = mongoose.model('Test', testSchema);

let carnerosPinot = new Test({
  producer: 'Robert Sinskey Vineyards',
  name: 'Carneros Pinot',
  vintage: '2013',
  varietal: 'Pinot Noir',
  country: 'United States',
  region: 'Napa Valley',
  blind: false
});

console.log(JSON.stringify(carnerosPinot));

module.exports.db = db;
module.exports.Test = Test;
