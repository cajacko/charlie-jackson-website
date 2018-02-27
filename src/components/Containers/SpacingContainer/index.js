// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './SpacingContainer.css';

const supportedProps = [
  'mt',
  'mt2',
  'mb',
  'mb2',
  'ml',
  'ml2',
  'mr',
  'mr2',
  'pt',
  'pb',
  'pl',
  'pr',
  'pt2',
  'pb2',
];

const SpacingContainer = ({
  flex,
  children,
  ...props
}: {
  flex?: boolean,
  children: React.Node,
  mt?: boolean,
  mt2?: boolean,
  mb?: boolean,
  mb2?: boolean,
  ml?: boolean,
  ml2?: boolean,
  mr?: boolean,
  mr2?: boolean,
  pt?: boolean,
  pb?: boolean,
  pl?: boolean,
  pr?: boolean,
  pt2?: boolean,
  pb2?: boolean,
}) => {
  const propsToPass = Object.assign({}, props);

  if (propsToPass.ph) {
    propsToPass.pr = true;
    propsToPass.pl = true;
  }

  if (propsToPass.pv) {
    propsToPass.pt = true;
    propsToPass.pb = true;
  }

  if (propsToPass.mh) {
    propsToPass.mr = true;
    propsToPass.ml = true;
  }

  if (propsToPass.mv) {
    propsToPass.mt = true;
    propsToPass.mb = true;
  }

  if (propsToPass.mv2) {
    propsToPass.mt2 = true;
    propsToPass.mb2 = true;
  }

  if (propsToPass.mh2) {
    propsToPass.ml2 = true;
    propsToPass.mr2 = true;
  }

  if (propsToPass.pv2) {
    propsToPass.pt2 = true;
    propsToPass.pb2 = true;
  }

  if (propsToPass.ph2) {
    propsToPass.pl2 = true;
    propsToPass.pr2 = true;
  }

  let classes = 'spacingcontainer';

  if (flex) {
    classes += ' spacingcontainer--flex';
  }

  supportedProps.forEach((prop) => {
    if (props[prop]) classes += ` spacingcontainer--${prop}`;
  });

  return <div className={classes}>{children}</div>;
};

SpacingContainer.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.bool,
};

SpacingContainer.defaultProps = {
  flex: false,
  mt: false,
  mt2: false,
  mb: false,
  mb2: false,
  ml: false,
  ml2: false,
  mr: false,
  mr2: false,
  pt: false,
  pb: false,
  pl: false,
  pr: false,
  pt2: false,
  pb2: false,
};

export default SpacingContainer;
