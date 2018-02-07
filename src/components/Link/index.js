import React, { PureComponent } from 'react';
import './Link.css';

class Link extends PureComponent {
  render() {
    return (
      <a className="link" href={this.props.href} target="_blank">
        {this.props.children}
      </a>
    );
  }
}

export default Link;
