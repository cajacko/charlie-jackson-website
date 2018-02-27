// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class ActiveFocusButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { showAsDiv: false };
  }

  componentWillReceiveProps({ active }) {
    if (this.props.active && !active) {
      // Small hack to remove sticky hover on touch devices, basically removes
      // the original button element from the dom and replaces it with a div,
      // then sets it back. This removes the sticky hover effect.
      this.setState({ showAsDiv: true }, () => {
        this.setState({ showAsDiv: false });
      });
    }
  }

  render() {
    return <Button {...this.props} showAsDiv={this.state.showAsDiv} />;
  }
}

ActiveFocusButton.propTypes = {
  active: PropTypes.bool,
  showAsDiv: PropTypes.bool,
};

ActiveFocusButton.defaultProps = {
  active: false,
  showAsDiv: false,
};

export default ActiveFocusButton;
