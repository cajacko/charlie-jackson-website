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
    let classes = 'button';

    if (this.props.hasText) classes += ' button--hasText';

    return (
      <button className={classes} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
