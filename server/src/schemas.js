const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  producer: String,
  name: String,
  vintage: String,
  varietal: String,
  country: String,
  region: String,
  oldWorld: Boolean,
  blind: Boolean
});

const gridSchema = mongoose.Schema({
  name: {type: String, required: true},
  sight: {
    clarity: {type: Number, min: 0, max: 2}, //1-3 clear, hazy, tubid
    concentration: {type: Number, min: 0, max: 2}, //1-3 pale, medium, deep
    color: {
      //white: water white, straw, yellow, gold
      //red: purple, ruby, red, garnet
      primary: {type: Number, min: 0, max: 3},
      secondary: {
        white: {
          silver: Boolean,
          green: Boolean,
          copper: Boolean
        },
        red: {
          orange: Boolean,
          blue: Boolean,
          ruby: Boolean,
          garnet: Boolean,
          brown: Boolean
        }
      }
    },
    rimVariation: Boolean,
    staining: {type: Number, min: 0, max: 3}, //1-4 none, light, medium, heavy
    tearing: {type: Number, min: 0, max: 2}, //1-3 light, medium, heavy
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
    intensity: {type: Number, min: 0, max: 2}, //delicate, moderate, powerful
    age: {type: Number, min: 0, max: 2}, //youthful, developing, vinous
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
    sweetness: {type: Number, min: 0, max: 5}, //1-6 bone dry, dry, off-dry, medium sweet, sweet, very sweet
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
    },
    structure: {
      phenolic: Boolean, //white only
      //1-5 for low, medium-, medium, medium+, high
      tannin: {type: Number, min: 0, max: 4}, //red only
      acid: {type: Number, min: 0, max: 4},
      alcohol: {type: Number, min: 0, max: 4},
      finish: {type: Number, min: 0, max: 4},
      complexity: {type: Number, min: 0, max: 4},
      //1-3
      body: {type: Number, min: 0, max: 2}, //light, medium, full
      texture: {type: Number, min: 0, max: 2} //creamy, round, lean
    },
  },
  conclusion: {
    varietal: String, //primary varietal
    oldWorld: Boolean, //old or new world
    climate: {type: Number, min: 0, max: 2}, //cool, moderate, warm
    country: String,
    age: {type: Number, min: 0, max: 2} //1-3 years, 4-6 years, 7+ years
  }
});

module.exports.testSchema = testSchema;
module.exports.gridSchema = gridSchema;
