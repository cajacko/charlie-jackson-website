import React, { PureComponent } from 'react';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    if (this.props.action) this.props.action(event);
  }

  render() {
    return <button onClick={this.onClick}>{this.props.text}</button>;
  }
}

export default Button;
