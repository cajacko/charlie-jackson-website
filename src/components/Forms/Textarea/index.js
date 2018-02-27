import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import inputControl from '../inputControl';
import './Textarea.css';

class Textarea extends PureComponent {
  render() {
    return (
      <textarea
        className="textarea"
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

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
