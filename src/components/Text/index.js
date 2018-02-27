import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Text.css';

class Text extends PureComponent {
  render() {
    let classes = 'text';

    if (this.props.bold) {
      classes += ' text--bold';
    }

    if (this.props.reduceWithWidth) {
      classes += ' text--reduceWithWidth';
    }

    if (this.props.underline) {
      classes += ' text--underline';
    }

    switch (this.props.fontSize) {
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

    switch (this.props.color) {
      case 'BLUE':
        classes += ' text--blue';
        break;
      case 'WHITE':
        classes += ' text--white';
        break;
      default:
        break;
    }

    return <span className={classes}>{this.props.text}</span>;
  }
}

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
