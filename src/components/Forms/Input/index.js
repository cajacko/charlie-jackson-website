// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import inputControl from '../inputControl';
import './Input.css';

const Input = ({
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
}: {
  id: string,
  name: string,
  placeholder?: string,
  value?: string,
  type: string,
  onChange: (value?: string, name: string) => void,
}) => (
  <input
    className="input"
    id={id}
    name={name}
    placeholder={placeholder}
    value={value}
    type={type}
    onChange={onChange}
  />
);

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
};

export default inputControl(Input);
