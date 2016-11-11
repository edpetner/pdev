import React, { PropTypes } from 'react';

const AppLinks = ({ display }) => {
  if (display) {
    return (
      <div
        className="appNavs"
      >
        <a className="appNavLinks" href="#">tMDB Search</a>
        <a className="appNavLinks" href="#">GitHub Search</a>
        <a className="appNavLinks" href="#">MTA App</a>
      </div>
    );
  }
  return (
    null
  );

};

AppLinks.propTypes = {
  display: React.PropTypes.bool.isRequired
};

export default AppLinks;
