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
      'region': null,
      'type': 'red',
    }
    this.link = '';
    this.stringInputs = ['name', 'producer', 'vintage', 'varietal', 'country', 'region'];
  }
  handleChange(event) {
    let key = event.target.placeholder;
    this.setState({
     [key]: event.target.value,
    })
    // console.log(this.state);
  }
  changeType() {
    if (this.state.type==='red') {
      this.setState({ type: 'white' });
    } else {
      this.setState({ type: 'red' });
    }

    console.log(this.state)
  }
  submit() {
    //TODO: input validation
    if (this.state.type === 'red' || this.state.type === 'white') {
      axios.post('http://localhost:6161/test', this.state)
        // .then(res => this.link = `http:\/\/localhost:6161/test/${res.data._id}`)
        .then(res => this.link =`./index.html?type=grid&id=${res.data._id}`)
        .then(() => this.setState(this.state));
      console.log(this.state);
      //`link: http:\/\/localhost:6161/test/${res.data._id}`
    } else {
      console.log('Type field is REQUIRED');
    }

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Create a Test:</h2>
        </div>
        <div className="row">
          <form>
            {this.stringInputs.map(field => (
              <input
                type="text"
                className="form-control"
                placeholder={field}
                value={this.state.field}
                onChange={this.handleChange.bind(this)}>
              </input>
            ))}
            <span>Grid Type (toggle):</span>
            <button
              type="button"
              className="btn btn-light"
              onClick={this.changeType.bind(this)}
            >{this.state.type}</button>
          </form>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.submit.bind(this)}
          >Submit</button>
          <a href={this.link}>{this.link.length ? 'Go to Test!': ''}</a>
        </div>
      </div>
    );
  }
}

export default Test;
