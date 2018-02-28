// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

/**
 * Display a piece of text. Run all text through this component so we can have
 * fine grained control of all text and themeing across the site
 *
 * @param {Object} props The props passed to the component
 * @param {Boolean} [props.bold] Whether the text should be bold or not
 * @param {Boolean} [props.reduceWithWidth] Whether to reduce the font size with
 *   the browser width
 * @param {Boolean} [props.underline] Whether to underline the text
 * @param {String} [props.fontSize] Enum for the font size
 * @param {String} [props.color] Enum for the colour of the text
 * @param {String} props.text The text to display
 *
 * @return {ReactElement} Markup to render
 */
const Text = ({
  bold,
  reduceWithWidth,
  underline,
  fontSize,
  color,
  text,
}: {
  bold?: ?boolean,
  reduceWithWidth?: ?boolean,
  underline?: ?boolean,
  fontSize?: ?string,
  color?: ?string,
  text: string,
}) => {
  let classes = 'text';

  if (bold) {
    classes += ' text--bold';
  }

  if (reduceWithWidth) {
    classes += ' text--reduceWithWidth';
  }

  if (underline) {
    classes += ' text--underline';
  }

  switch (fontSize) {
    case 'XX_LARGE':
      classes += ' text--xxl';
      break;

    case 'X_LARGE':
      classes += ' text--xl';
      break;

    case 'LARGE':
      classes += ' text--l';
      break;

    case 'SMALL':
      classes += ' text--sm';
      break;

    default:
      break;
  }

  switch (color) {
    case 'BLUE':
      classes += ' text--blue';
      break;
    case 'WHITE':
      classes += ' text--white';
      break;
    default:
      break;
  }

  return <span className={classes}>{text}</span>;
};

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  underline: PropTypes.bool,
  reduceWithWidth: PropTypes.bool,
  bold: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Text.defaultProps = {
  color: null,
  fontSize: null,
  underline: false,
  reduceWithWidth: false,
  bold: false,
};

export default Text;
