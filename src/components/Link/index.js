import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
