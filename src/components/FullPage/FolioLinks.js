import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const FolioLinks = ({ updateLabel }) => {
  // console.log('FolioLInks', updateLabel);
  return (
    <div className="noBorderPadding">XXX
      <a href="https://goo.gl/XGvu4j">
        <FontAwesome
          className="icon-footer"
          name="folder"
          id="My Resume"
          onMouseOver={updateLabel()}
          onMouseOut={updateLabel()}
        >XX</FontAwesome>
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
  )
};
//
// FolioLinks.propTypes = {
//   updateLabel: React.PropTypes.func.isRequired
// };

export default FolioLinks;
