import React, { PureComponent } from 'react';
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

export default inputControl(Input);
