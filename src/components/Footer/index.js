import React from 'react';
import FontAwesome from 'react-fontawesome';
/* eslint-disable */
import icon from './images/logo_v2.svg';
/* eslint-enable */

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-icons">
      <a href="https://goo.gl/XGvu4j">
        <FontAwesome
          className="icon-footer"
          name="folder"
        />
      </a>&nbsp;
      <a href="http://edpetner.deviantart.com/">
        <FontAwesome
          className="icon-footer"
          name="deviantart"
        />
      </a>&nbsp;
      <a href="https://github.com/edpetner">
        <FontAwesome
          className="icon-footer"
          name="github-square"
        />
      </a>&nbsp;
      <a href="https://www.linkedin.com/in/edwardpetner">
        <FontAwesome
          className="icon-footer"
          name="linkedin-square"
        />
      </a>

    </div>
      <object
        data={icon}
        type="image/svg+xml"
        height="100px" />
    </footer>
  );
};

export default Footer;
