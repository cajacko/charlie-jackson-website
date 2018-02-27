// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

class Paragraph extends Component {
  render() {
    let classes = 'paragraph';

    if (this.props.center) {
      classes += ' paragraph--center';
    }

    if (this.props.noSpacing) {
      classes += ' paragraph--nospacing';
    }

    return <p className={classes}>{this.props.children}</p>;
  }
}

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
