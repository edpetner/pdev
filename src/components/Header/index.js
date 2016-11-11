import React from 'react';
import FontAwesome from 'react-fontawesome';
/* eslint-disable */
import logo from './images/full_logo.svg';
/* eslint-enable */

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <object
          data={logo}
          type="image/svg+xml"
          height="200px"
        />
        <div className="icon-bar">
          <a href="https://goo.gl/XGvu4j">
            <FontAwesome
              className="icon-footer"
              name="folder"
            />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="http://edpetner.deviantart.com/">
            <FontAwesome
              className="icon-footer"
              name="deviantart"
            />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/edpetner">
            <FontAwesome
              className="icon-footer"
              name="github-square"
            />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/edwardpetner">
            <FontAwesome
              className="icon-footer"
              name="linkedin-square"
            />
          </a>

        </div>
      </div>
    );
  }
}

export default Header;
