import React, { Component } from 'react';
import Ha from './pages/Ha';
import './assets/style/base.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        a: 2
      }
    };
  }

  render() {
    return (
      <div className="haha">
        WEBPACK REACT q
        {this.state.data.a}
        <Ha />
      </div>
    );
  }
}


export default App;
