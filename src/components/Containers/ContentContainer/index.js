// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.css';
import SpacingContainer from '../SpacingContainer';

const ContentContainer = ({ children, ...props }: { children: React.Node }) => (
  <div className="contentcontainer">
    <div className="contentcontainer__wrapper">
      <SpacingContainer {...props}>{children}</SpacingContainer>
    </div>
  </div>
);

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;
