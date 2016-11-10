import React from 'react';

import Header from './Header';
import ContactMe from './ContactMe';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className="bodyContainer"
        >
          <strong>-----</strong>
          <ContactMe />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
