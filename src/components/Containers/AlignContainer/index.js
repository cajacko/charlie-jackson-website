// @flow

/* eslint react/no-unused-prop-types: 0 */
// Because of if (props[prop]) classes += ` aligncontainer--${prop}`;

import * as React from 'react';
import PropTypes from 'prop-types';
import './AlignContainer.css';

const supportedProps = ['hc', 'vc'];

const AlignContainer = ({
  children,
  ...props
}: {
  children: React.Node,
  vc?: boolean,
  hc?: boolean,
}) => {
  let classes = 'aligncontainer';

  supportedProps.forEach((prop) => {
    if (props[prop]) classes += ` aligncontainer--${prop}`;
  });

  return <div className={classes}>{children}</div>;
};

AlignContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

AlignContainer.defaultProps = {
  hc: false,
  vc: false,
};

export default AlignContainer;
