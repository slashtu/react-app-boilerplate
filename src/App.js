import React, { Component } from 'react';

import Routes from 'routes';

import './normalize.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Routes />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
