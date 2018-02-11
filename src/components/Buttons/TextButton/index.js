import React, { PureComponent } from 'react';
import Text from '../../Text';
import Button from '../Button';

class TextButton extends PureComponent {
  render() {
    return (
      <Button action={this.props.action} hasText theme={this.props.theme}>
        <Text text={this.props.text} />
      </Button>
    );
  }
}

export default TextButton;
