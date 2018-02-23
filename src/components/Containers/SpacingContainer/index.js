import React, { PureComponent } from 'react';
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

class SpacingContainer extends PureComponent {
  render() {
    const props = Object.assign({}, this.props);

    if (props.ph) {
      props.pr = true;
      props.pl = true;
    }

    if (props.pv) {
      props.pt = true;
      props.pb = true;
    }

    if (props.mh) {
      props.mr = true;
      props.ml = true;
    }

    if (props.mv) {
      props.mt = true;
      props.mb = true;
    }

    if (props.mv2) {
      props.mt2 = true;
      props.mb2 = true;
    }

    if (props.mh2) {
      props.ml2 = true;
      props.mr2 = true;
    }

    if (props.pv2) {
      props.pt2 = true;
      props.pb2 = true;
    }

    if (props.ph2) {
      props.pl2 = true;
      props.pr2 = true;
    }

    let classes = 'spacingcontainer';

    if (this.props.flex) {
      classes += ' spacingcontainer--flex';
    }

    supportedProps.forEach(prop => {
      if (props[prop]) classes += ` spacingcontainer--${prop}`;
    });

    return <div className={classes}>{this.props.children}</div>;
  }
}

export default SpacingContainer;
