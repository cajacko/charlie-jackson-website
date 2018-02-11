import React, { PureComponent } from 'react';
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

export default inputControl(Textarea);
