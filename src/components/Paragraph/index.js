import React, { Component } from 'react';
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

export default Paragraph;
