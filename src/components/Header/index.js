import React from 'react';
/* eslint-disable */
import logo from './images/simple_logo.svg';
/* eslint-enable */

class Header extends React.Component {
  render() {
    return (
      <div className="headerElement">
        <img
          src={logo}
          height="200px"
        />
      </div>
    );
  }
}

export default Header;
