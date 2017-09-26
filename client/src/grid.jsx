import React from 'react';
import axios from 'axios';

class Grid extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    axios.get(`http:\/\/localhost:6161/test/${this.props.id}`)
      .then(response => this.setState({
        testId: response.data._id,
        type: response.data.type
      }))
      .then(() => console.log("got the things ", this.state))
      .catch(() => console.log('Error getting data'));
  }
  render() {
    return <h2>HIHIHIHIHI</h2>
  }
}

export default Grid;
