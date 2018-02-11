import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

TextButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextButton;
