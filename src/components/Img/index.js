// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './Img.css';

const Img = ({
  contain,
  fill,
  src,
  alt,
}: {
  contain?: boolean,
  fill?: boolean,
  src: string,
  alt: string,
}) => {
  if (contain || fill) {
    return (
      <div
        className={`img--background img--${contain ? 'contain' : 'fill'}`}
        style={{ backgroundImage: `url('${src}')` }}
      />
    );
  }

  return <img className="img" src={src} alt={alt} />;
};

Img.propTypes = {
  contain: PropTypes.bool,
  fill: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Img.defaultProps = {
  contain: false,
  fill: false,
};

export default Img;
