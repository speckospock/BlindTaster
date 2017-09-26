import React from 'react';
import {render} from 'react-dom';
import Test from './testBuilder.jsx';
import Grid from './grid.jsx';

class App extends React.Component {
  componentWillMount() {
    if (window.location.href.split('?').length > 1) {
      let stuff = {}
      window.location.href.split('?')[1].split('&').map(el => {
        let things = el.split('=');
        stuff[things[0]] = things[1];
      });
      console.log("cccc", stuff);
    }
    console.log("bbbb", window.location.href.split('?')[1].split('&'));
  }
  render() {
    return (
      <div className="container">
        <Test />
        <Grid id='59c9bee53ceca9092508a9ae' />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
