import React from 'react';
import './Loading.css';

const Loading = ({ theme }) => {

  let classes = 'loading';

  switch(theme) {
    case 'DARK':
      classes += ' loading--dark';
      break;

    default:
      break;
  }

  return (
  <div className={classes}>Loading...</div>
);
};

export default Loading;
