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

    if (this.props.href) {
      return (
        <a className={classes} href={this.props.href} target="_blank">
          {this.props.children}
        </a>
      );
    }

    return (
      <button className={classes} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func,
  href: PropTypes.string,
};

Button.propTypes = {
  action: PropTypes.func,
  href: PropTypes.string,
};

export default Button;
