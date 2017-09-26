import React from 'react';
import {render} from 'react-dom';
import Test from './testBuilder.jsx';
import Grid from './grid.jsx';

const Route = (props) => {
  if (props.type === 'grid') {
    return <Grid id={props.id}/>
  } else {
    return <Test />
  }
}

class App extends React.Component {
  componentWillMount() {
    if (window.location.href.split('?').length > 1) {
      let stuff = {}
      window.location.href.split('?')[1].split('&').map(el => {
        let things = el.split('=');
        stuff[things[0]] = things[1];
      });
      console.log("cccc", stuff);
      this.setState(stuff);
    }
  }
  render() {
    return (
      <div className="container">
        <Route type={this.state.type} id={this.state.id}/>
      </div>
    );
  }
}

//<Test />
// <Grid id='59c9bee53ceca9092508a9ae' />

render(<App/>, document.getElementById('app'));
