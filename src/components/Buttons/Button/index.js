import React, { PureComponent } from 'react';
import './Button.css';
import Text from '../../Text';

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
    return (
      <button className="button" onClick={this.onClick}>
        <Text text={this.props.text} />
      </button>
    );
  }
}

export default Button;
