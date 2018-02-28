// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

const Paragraph = ({
  center,
  noSpacing,
  children,
}: {
  center?: boolean,
  noSpacing?: boolean,
  children: React.Node,
}) => {
  let classes = 'paragraph';

  if (center) {
    classes += ' paragraph--center';
  }

  if (noSpacing) {
    classes += ' paragraph--nospacing';
  }

  return <p className={classes}>{children}</p>;
};

Paragraph.propTypes = {
  center: PropTypes.bool,
  noSpacing: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  center: false,
  noSpacing: false,
};

export default Paragraph;
