import React from 'react';
/* eslint-disable */
import logo from './images/logo_small_v01.svg';
import smallLogo from './images/simple_logo.png';
/* eslint-enable */

class Header extends React.Component {
  render() {
    return (
      <div className="headerElement">
        <img
          src={smallLogo}
          height="200px"
        />
      </div>
    );
  }
}

export default Header;
