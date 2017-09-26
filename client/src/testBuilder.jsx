import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': null,
      'producer': null,
      'vintage': null,
      'varietal': null,
      'country': null,
      'region': null
    }
  }
  handleChange(event) {
    let key = event.target.placeholder;
    this.setState({
     [key]: event.target.value,
    })
    // console.log(this.state);
  }
  submit() {
    axios.post('http://localhost:6161/test', this.state);
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            {Object.keys(this.state).map(field => (
              <input
                type="text"
                className="form-control"
                placeholder={field}
                value={this.state.field}
                onChange={this.handleChange.bind(this)}>
              </input>
            ))}
          </form>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.submit.bind(this)}
          >Submit</button>
        </div>
      </div>
    );
  }
}

export default Test;
