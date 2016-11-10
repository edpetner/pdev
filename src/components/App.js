import React from 'react';

import Header from './Header';
import ContactMe from './ContactMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className="bodyContainer"
        >
          <ContactMe />
        </div>
      </div>
    );
  }
}

export default App;
