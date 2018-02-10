import React, { PureComponent } from 'react';
import './Img.css';

class Img extends PureComponent {
  render() {
    if (this.props.contain) {
      return (
        <div
          className="img--contain"
          style={{ backgroundImage: `url('${this.props.src}')` }}
        />
      );
    }

    return <img className="img" src={this.props.src} alt={this.props.alt} />;
  }
}

export default Img;
