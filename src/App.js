import React, { Component } from 'react';
import Routes from 'routes';
import Header from 'components/Header';

import './normalize.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Routes />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
