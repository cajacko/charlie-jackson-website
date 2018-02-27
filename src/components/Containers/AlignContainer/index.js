import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

AlignContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlignContainer;
