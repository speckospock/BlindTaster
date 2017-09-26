import React from 'react';
import {render} from 'react-dom';
import Test from './testBuilder.jsx';
import Grid from './grid.jsx';

class App extends React.Component {
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
