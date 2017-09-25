import React from 'react';
import {render} from 'react-dom';
import Test from './testBuilder.jsx';

class App extends React.Component {
  render() {
    return <Test />;
  }
}

render(<App/>, document.getElementById('app'));
