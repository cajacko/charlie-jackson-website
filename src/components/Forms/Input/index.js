// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import inputControl from '../inputControl';
import './Input.css';

type Props = {
  id: string,
  name: string,
  placeholder?: string,
  value?: ?string,
  type: string,
  onChange: (value?: string, name: string) => void,
  theme?: string,
};

/**
 * An input component
 *
 * @param {Object} props Props passed to the component
 *
 * @return {ReactElement} Markup to render
 */
const Input = ({
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
  theme,
}: Props) => {
  let classes = 'input';

  switch (theme) {
    case 'DARK':
      classes += ' input--dark';
      break;
    default:
      break;
  }

  return (
    <input
      className={classes}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: null,
  value: '',
  theme: null,
};

export default inputControl(Input);
