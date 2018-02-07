import React, { PureComponent } from 'react';
import './Text.css';

class Text extends PureComponent {
  render() {
    return <span className="text">{this.props.text}</span>;
  }
}

export default Text;
