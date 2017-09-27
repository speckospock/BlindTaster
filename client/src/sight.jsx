import React from 'react';
import _ from 'lodash';
import axios from 'axios';

class Sight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        primary: [],
        secondary: []
      }
    };
  }
  componentWillMount() {
    this.setType();
  }
  updateForm() {
    this.props.update(this.props.form);
  }
  setType() {
    let wineType = this.props.type();
    if (wineType) {
      this.setState({type: wineType, color: this.props.color[wineType]});
      console.log("TYPE: ", this.state.type);
    } else {
      setTimeout(this.setType.bind(this), 500);
      console.log("GAH");
    }
  }
  render() {
    return (
    <div className="container">
      <h3>Sight:</h3>
      <div className="row">
        <form>
        <div className="row">
          {Object.keys(this.props.options).map(option => (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown${option}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {option}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.props.options[option].map((el, i) => {
                  console.log(el);
                  return <button
                    className='dropdown-item'
                    type="button"
                    onClick={() => {
                      this.props.form[option] = i;
                      this.updateForm();
                      $(`#dropdown${option}`).text(`${option}: ${el}`);
                    }}>{el}</button>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {Object.keys(this.state.color).map(option => (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown${option}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {option}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.state.color[option].map((el, i) => {
                  console.log(el);
                  return <button
                    className='dropdown-item'
                    type="button"
                    onClick={() => {
                      if (option === 'primary') {
                        this.props.form.color.primary = i;
                        console.log(this.props.form);
                        this.updateForm();
                        $(`#dropdown${option}`).text(`primary: ${el}`);
                      } else if (option === 'secondary') {
                        this.props.form.color.secondary[this.state.type][el] = !this.props.form.color.secondary[this.state.type][el];
                        console.log(this.props.form.color.secondary[this.state.type]);
                        this.updateForm();
                        let selected = Object.keys(this.props.form.color.secondary[this.state.type])
                          .filter(item => !!this.props.form.color.secondary[this.state.type][item])
                          .join(', ');
                        $(`#dropdown${option}`).text(`secondary: ${selected}`);
                        console.log(this.props.form.color);
                      }
                    }}>{el}</button>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <button
            className='btn btn-secondary'
            type="button"
            id="rimVariation"
            onClick={() => {
              this.props.form.rimVariation = !this.props.form.rimVariation;
              this.updateForm();
              $('#rimVariation').text(`Rim Variation: ${this.props.form.rimVariation}`)
            }}
          > {`Rim Variation: ${this.props.form.rimVariation}`}
          </button>
          <button
            className='btn btn-secondary'
            type="button"
            id="gasEvidence"
            onClick={() => {
              this.props.form.gasEvidence = !this.props.form.gasEvidence;
              this.updateForm();
              $('#gasEvidence').text(`Gas Evidence: ${this.props.form.gasEvidence}`)
            }}
          > {`Gas Evidence: ${this.props.form.gasEvidence}`}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
  }
};

export default Sight;
