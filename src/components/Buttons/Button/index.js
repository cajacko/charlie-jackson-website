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
    if (this.props.disabled) {
      classes += ' button--disabled';
    } else {
      classes += ' button--notDisabled';
    }

    switch (this.props.theme) {
      case 'LIGHT':
        classes += ' button--light';
        break;

      default:
        break;
    }

    if (this.props.showAsDiv) {
      return <div className={classes}>{this.props.children}</div>;
    }

    if (this.props.href) {
      return (
        <a className={classes} href={this.props.href} target="_blank">
          {this.props.children}
        </a>
      );
    }

    return (
      <button
        className={classes}
        onClick={this.onClick}
        disabled={!!this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  showAsDiv: PropTypes.bool,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  hasText: PropTypes.bool,
};

Button.defaultProps = {
  action: null,
  href: null,
  showAsDiv: false,
  theme: null,
  disabled: false,
  fill: false,
  hasText: false,
};

export default Button;
