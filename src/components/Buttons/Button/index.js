import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

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
    if (this.props.fill) classes += ' button--fill';

    switch (this.props.theme) {
      case 'LIGHT':
        classes += ' button--light';
        break;

      default:
        break;
    }

    return (
      <button className={classes} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Button;
