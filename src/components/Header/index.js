import React from 'react';
/* eslint-disable */
import logo from './images/logo_small_v01.svg';
/* eslint-enable */

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>pDevelopment</h2>
        <img
          src={logo}
          width="500px"
          height="500px"
        />
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>edward.petner@gmail.com</li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
