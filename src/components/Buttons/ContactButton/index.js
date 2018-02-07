import React, { PureComponent } from 'react';
import Button from '../Button';

class ContactButton extends PureComponent {
  constructor(props) {
    super(props);

    this.action = this.props.action;
  }

  action() {
    console.warn('Show contact modal');
  }

  render() {
    return (
      <Button text={this.props.text || 'Contact me'} action={this.action} />
    );
  }
}

export default ContactButton;
