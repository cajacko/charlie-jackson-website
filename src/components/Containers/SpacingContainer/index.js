import React, { PureComponent } from 'react';
import './SpacingContainer.css';

const supportedProps = ['mt', 'mt2', 'mb', 'ml', 'mr', 'pt', 'pb', 'pl', 'pr'];

class SpacingContainer extends PureComponent {
  render() {
    const props = Object.assign({}, this.props);

    if (props.ph) {
      props.pr = true;
      props.pl = true;
    }

    let classes = 'spacingcontainer';

    supportedProps.forEach(prop => {
      if (props[prop]) classes += ` spacingcontainer--${prop}`;
    });

    return <div className={classes}>{this.props.children}</div>;
  }
}

export default SpacingContainer;
