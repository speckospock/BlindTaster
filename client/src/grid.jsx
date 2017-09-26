import React from 'react';
import axios from 'axios';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      sight: {
        clarity: 0,
        concentration: 0,
        color: {
          primary: 0,
          secondary: {
            white: {
              silver: false,
              green: false,
              copper: false
            },
            red: {
              orange: false,
              blue: false,
              ruby: false,
              garnet: false,
              brown: false
            }
          }
        },
        rimVariation: false,
        staining: 0,
        tearing: 0,
        gasEvidence: false
      },
      nose: {
        faults: {
          tca: false,
          h2s: false,
          volatileAcidity: false,
          ethylAcetate: false,
          brett: false,
          oxidation: false
        },
        intensity: 0,
        age: 0,
        fruit:{
          red: {
            black: false,
            red: false,
            blue: false,
            other: false
          },
          white: {
            citrus: false,
            apple: false,
            stone: false,
            tropical: false,
            melon: false
          }
        },
        fruitCharacter: {
          tart: false,
          ripe: false,
          fresh: false,
          jammy: false,
          baked: false
        },
        nonFruit: {
          red: {
            floral: false,
            vegetal: false,
            herbal: false,
            mint: false,
            peppercorn: false,
            coffee: false,
            game: false,
            balsamic: false
          },
          white: {
            floral: false,
            herbal: false,
            vegetal: false,
            botrytis: false,
            nutty: false,
            lees: false,
            creamy: false
          }
        },
        earth: {
          forest: false,
          compost: false,
          mushroom: false,
          soil: false
        },
        mineral: {
          mineral: false,
          wetStone: false,
          limestone: false,
          chalk: false,
          slate: false,
          flint: false
        },
        wood: {
          present: false,
          old: false, //old/new
          large: false, //large/small
          french: false //French/American
        }
      },
      palate: {
        sweetness: 0,
        fruit: {
          red: {
            black: false,
            red: false,
            blue: false,
            other: false
          },
          white: {
            citrus: false,
            apple: false,
            stone: false,
            tropical: false,
            melon: false
          }
        },
        fruitCharacter: {
          tart: false,
          ripe: false,
          fresh: false,
          jammy: false,
          baked: false
        },
        nonFruit: {
          red: {
            floral: false,
            vegetal: false,
            herbal: false,
            mint: false,
            peppercorn: false,
            coffee: false,
            game: false,
            balsamic: false
          },
          white: {
            floral: false,
            herbal: false,
            vegetal: false,
            botrytis: false,
            nutty: false,
            lees: false,
            creamy: false
          }
        },
        earth: {
          forest: false,
          compost: false,
          mushroom: false,
          soil: false
        },
        mineral: {
          mineral: false,
          wetStone: false,
          limestone: false,
          chalk: false,
          slate: false,
          flint: false
        },
        wood: {
          present: false,
          old: false, //old/new
          large: false, //large/small
          french: false //French/American
        },
        structure: {
          phenolic: false, //white only
          //1-5 for low, medium-, medium, medium+, high
          tannin: 0, //red only
          acid: 0,
          alcohol: 0,
          finish: 0,
          complexity: 0,
          //1-3
          body: 0, //light, medium, full
          texture: 0 //creamy, round, lean
        }

      },
      conclusion: {
        varietal: null, //primary varietal
        oldWorld: false, //old or new world
        climate: 0, //cool, moderate, warm
        country: null,
        age: 0 //1-3 years, 4-6 years, 7+ years
      }
    };
  }
  componentWillMount() {
    axios.get(`http:\/\/localhost:6161/test/${this.props.id}`)
      .then(response => this.setState({
        testId: response.data._id,
        type: response.data.type,
      }))
      .then(() => console.log("got the things ", this.state))
      .catch(() => console.log('Error getting data'));
  }
  render() {
    return (
      <h2>HIHIHIHIHI</h2>
    );
  }
}

export default Grid;
