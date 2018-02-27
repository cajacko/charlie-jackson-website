// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ theme }) => {
  let classes = 'loading';

  switch (theme) {
    case 'DARK':
      classes += ' loading--dark';
      break;

    default:
      break;
  }

  return <div className={classes}>Loading...</div>;
};

Loading.propTypes = {
  theme: PropTypes.string,
};

Loading.defaultProps = {
  theme: null,
};

export default Loading;
