import React, { PureComponent } from 'react';
import './AlignContainer.css';

const supportedProps = ['hc', 'vc'];

class AlignContainer extends PureComponent {
  render() {
    let classes = 'aligncontainer';

    supportedProps.forEach((prop) => {
      if (this.props[prop]) classes += ` aligncontainer--${prop}`;
    });

    return <div className={classes}>{this.props.children}</div>;
  }
}

export default AlignContainer;
