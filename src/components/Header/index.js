import React from 'react';
import FontAwesome from 'react-fontawesome';
/* eslint-disable */
import logo from './images/full_logo.svg';
/* eslint-enable */

class Header extends React.Component {
  render() {
    return (
      <div className="headerElement">
        <img
          src={logo}
          height="300px"
        />
        <div>
          <a href="http://edpetner.deviantart.com/">
            <FontAwesome
              className="icon"
              name="deviantart"
            />
          </a>&nbsp;|&nbsp;
          <a href="https://github.com/edpetner">
            <FontAwesome
              className="icon"
              name="github-square"
            />
          </a>&nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/edwardpetner">
            <FontAwesome
              className="icon"
              name="linkedin-square"
            />
          </a>

        </div>
      </div>
    );
  }
}

export default Header;
