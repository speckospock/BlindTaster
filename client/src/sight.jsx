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
    axios.get(`http:\/\/localhost:6161/test/${this.props.id}`)
      .then(res => {
        console.log("RES", res);
        this.setState({
          color: this.props.color[res.data.type]
        });
      }).then(() => console.log("hihihi", this.state))
      .catch(() => this.componentWillMount());
  }
  render() {
    return (
    <div className="container">
      <h3>Sight:</h3>
      <div className="row">
        <form>
        <div className="row">
          {Object.keys(this.props.options).map(option => (
            <div className="col-3">
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
                        $(`#dropdown${option}`).text(`${option}: ${el}`);
                      }}>{el}</button>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {Object.keys(this.state.color).map(option => (
            <div className="col-6">
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
                        this.props.form[option] = i;
                        $(`#dropdown${option}`).text(`${option}: ${el}`);
                      }}>{el}</button>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        </form>
        {console.log(this.props)}
      </div>
    </div>
  );
  }
};

export default Sight;
