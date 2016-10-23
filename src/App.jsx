import React, { Component } from 'react';
import './assets/style/base.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return <div className="haha">WEBPACK REACT TEMPLATE</div>;
  }
}


export default App;
