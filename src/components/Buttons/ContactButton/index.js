// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextButton from '../TextButton';

type Props = {
  text?: ?string,
  theme?: ?string,
};

class ContactButton extends PureComponent<Props> {
  static contextTypes = {
    showContactModal: PropTypes.func,
  };

  static propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string,
  };

  static defaultProps = {
    text: null,
    theme: null,
  };

  constructor(props: Props) {
    super(props);

    (this: any).action = this.action.bind(this);
  }

  action() {
    this.context.showContactModal();
  }

  render() {
    return (
      <TextButton
        text={this.props.text || 'Contact me'}
        action={this.action}
        theme={this.props.theme}
      />
    );
  }
}

export default ContactButton;
