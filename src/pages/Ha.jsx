import React, { Component } from 'react';

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
        WEBPACK REACT 1sss
        {this.state.data.a}
      </div>
    );
  }
}


export default App;
