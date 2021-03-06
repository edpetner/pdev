import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const FolioLinks = ({ labelValue }) => {
  // console.log('FolioLInks', updateLabel);
    let animateClass = "";
    if (labelValue !== 'my navigation') {
      animateClass = "comeIn";
    }
    return (
      <strong className={`linksLabel ${animateClass}`}>{labelValue}</strong>
    );
};

FolioLinks.propTypes = {
  labelValue: React.PropTypes.string.isRequired
};

export default FolioLinks;
