const mongoose = require('mongoose');

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
        floral: Boolean,
        herbal: Boolean,
        vegetal: Boolean,
        botrytis: Boolean,
        nutty: Boolean,
        lees: Boolean,
        creamy: Boolean
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
      old: Boolean, //old/new
      large: Boolean, //large/small
      french: Boolean //French/American
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
    grape: String, //primary varietal
    oldWorld: Boolean, //old or new world
    climate: Number, //cool, moderate, warm
    country: String,
    age: Number //1-3 years, 4-6 years, 7+ years
  }

});

module.exports.testSchema = testSchema;
module.exports.gridSchema = gridSchema;
