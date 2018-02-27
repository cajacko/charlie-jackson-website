import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Button from '../Button';

class TextButton extends PureComponent {
  render() {
    return (
      <Button
        action={this.props.action}
        href={this.props.href}
        hasText
        theme={this.props.theme}
        disabled={!!this.props.disabled}
      >
        <Text text={this.props.text} />
      </Button>
    );
  }
}

TextButton.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
};

TextButton.defaultProps = {
  action: null,
  href: null,
  theme: null,
  disabled: false,
};

export default TextButton;
