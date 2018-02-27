import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextButton from '../TextButton';

class ContactButton extends PureComponent {
  constructor(props) {
    super(props);

    this.action = this.action.bind(this);
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

ContactButton.contextTypes = {
  showContactModal: PropTypes.func,
  theme: PropTypes.string,
};

export default ContactButton;
