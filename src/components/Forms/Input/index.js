// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import inputControl from '../inputControl';
import './Input.css';

class Input extends PureComponent {
  render() {
    return (
      <input
        className="input"
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        type={this.props.type}
        onChange={this.props.onChange}
      />
    );
  }
}

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
