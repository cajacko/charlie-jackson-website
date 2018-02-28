// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

type Props = {
  active?: boolean,
  children: React.Node,
};

type State = {
  showAsDiv: boolean,
};

class ActiveFocusButton extends React.PureComponent<Props, State> {
  static defaultProps = {
    active: false,
  };

  static propTypes = {
    active: PropTypes.bool,
  };

  constructor(props: Props) {
    super(props);

    this.state = { showAsDiv: false };
  }

  componentWillReceiveProps({ active }: Props) {
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

export default ActiveFocusButton;
