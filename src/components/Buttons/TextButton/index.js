// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Button from '../Button';

const TextButton = ({
  action,
  href,
  theme,
  disabled,
  text,
}: {
  action?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  href?: string,
  theme?: string,
  disabled?: boolean,
  text: string,
}) => (
  <Button
    action={action}
    href={href}
    hasText
    theme={theme}
    disabled={!!disabled}
  >
    <Text text={text} />
  </Button>
);

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
