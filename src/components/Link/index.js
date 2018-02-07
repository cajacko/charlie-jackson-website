import React, { PureComponent } from 'react';

class Link extends PureComponent {
  render() {
    return (
      <a href={this.props.href} target="_blank">
        {this.props.children}
      </a>
    );
  }
}

export default Link;
