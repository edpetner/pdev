import React from 'react';
import FontAwesome from 'react-fontawesome';
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
        <div>
          <a href="mailto:edward.petner@gmail.com">
            <FontAwesome
              className="icon"
              name="envelop-square"
            />
          </a>
          <a href="https://github.com/edpetner">
            <FontAwesome
              className="icon"
              name="github-square"
            />
          </a>
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
