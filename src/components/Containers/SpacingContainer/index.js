// @flow

/* eslint react/no-unused-prop-types: 0 */
// Because of if (props[prop]) classes += ` spacingcontainer--${prop}`;

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
  pv?: boolean,
  ph2?: boolean,
  pv2?: boolean,
  mh2?: boolean,
  mv2?: boolean,
  mv?: boolean,
  mh?: boolean,
  ph?: boolean,
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
  const propsToPass = {};

  if (props.ph) {
    propsToPass.pr = true;
    propsToPass.pl = true;
  }

  if (props.pv) {
    propsToPass.pt = true;
    propsToPass.pb = true;
  }

  if (props.mh) {
    propsToPass.mr = true;
    propsToPass.ml = true;
  }

  if (props.mv) {
    propsToPass.mt = true;
    propsToPass.mb = true;
  }

  if (props.mv2) {
    propsToPass.mt2 = true;
    propsToPass.mb2 = true;
  }

  if (props.mh2) {
    propsToPass.ml2 = true;
    propsToPass.mr2 = true;
  }

  if (props.pv2) {
    propsToPass.pt2 = true;
    propsToPass.pb2 = true;
  }

  if (props.ph2) {
    propsToPass.pl2 = true;
    propsToPass.pr2 = true;
  }

  Object.assign(propsToPass, props);

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
  pv: false,
  ph2: false,
  pv2: false,
  mh2: false,
  mv2: false,
  mv: false,
  mh: false,
  ph: false,
};

export default SpacingContainer;
