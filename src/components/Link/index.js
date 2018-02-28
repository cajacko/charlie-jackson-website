// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = ({ href, children }: { href: string, children: React.Node }) => (
  <a className="link" href={href} target="_blank">
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
