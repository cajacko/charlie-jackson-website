// @flow

import React from 'react';
import PropTypes from 'prop-types';
import inputControl from '../inputControl';
import './Textarea.css';

const Textarea = ({
  id,
  name,
  placeholder,
  onChange,
  value,
}: {
  id: string,
  name: string,
  placeholder?: string,
  onChange: (value?: string, name: string) => void,
  value?: string,
}) => (
  <textarea
    className="textarea"
    id={id}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: null,
  value: '',
};

export default inputControl(Textarea);
