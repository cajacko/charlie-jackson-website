import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Img.css';

class Img extends PureComponent {
  render() {
    if (this.props.contain || this.props.fill) {
      return (
        <div
          className={`img--background img--${
            this.props.contain ? 'contain' : 'fill'
          }`}
          style={{ backgroundImage: `url('${this.props.src}')` }}
        />
      );
    }

    return <img className="img" src={this.props.src} alt={this.props.alt} />;
  }
}

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
