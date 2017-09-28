import React, { Component } from 'react';
import Inbox from './Inbox';
import BasePage from './BasePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasePage>
          <Inbox />
        </BasePage>
      </div>
    );
  }
}

export default App;
