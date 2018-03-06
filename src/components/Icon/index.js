// @flow

import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../constants/icons';
import './Icons.css';

const Icon = ({
  icon,
  reduceWithWidth,
  color,
  size,
}: {
  icon: string,
  reduceWithWidth?: boolean,
  color?: ?string,
  size?: ?string,
}) => {
  let html = icons[icon];

  if (!html) {
    // eslint-disable-next-line no-console
    console.error(new Error(`Icon does not exist: ${icon}`));
    return null;
  }

  html = html.replace('<svg', '<svg class="icon__svg"');

  let classes = 'icon';

  if (reduceWithWidth) {
    classes += ' icon--reduceWithWidth';
  }

  switch (color) {
    case 'ORANGE':
      classes += ' icon--orange';
      break;
    case 'BLUE':
      classes += ' icon--blue';
      break;

    default:
      classes += ' icon--darkgrey';
      break;
  }

  switch (size) {
    case 'LARGE':
      classes += ' icon--lg';
      break;
    case 'SMALL':
      classes += ' icon--sm';
      break;

    default:
      break;
  }

  return <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
};

Icon.propTypes = {
  size: PropTypes.string,
  reduceWithWidth: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  size: null,
  reduceWithWidth: false,
  color: null,
};

export default Icon;
