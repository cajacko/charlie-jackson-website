// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

type Props = {
  action?: ?(event: SyntheticEvent<HTMLButtonElement>) => void,
  href?: ?string,
  children: React.Node,
  showAsDiv?: ?boolean,
  theme?: ?string,
  disabled?: ?boolean,
  fill?: ?boolean,
  hasText?: ?boolean,
};

class Button extends React.PureComponent<Props> {
  static propTypes = {
    action: PropTypes.func,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    showAsDiv: PropTypes.bool,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    fill: PropTypes.bool,
    hasText: PropTypes.bool,
  };

  static defaultProps = {
    action: null,
    href: null,
    showAsDiv: false,
    theme: null,
    disabled: false,
    fill: false,
    hasText: false,
  };

  constructor(props: Props) {
    super(props);

    (this: any).onClick = this.onClick.bind(this);
  }

  onClick(event: SyntheticEvent<HTMLButtonElement>) {
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

export default Button;
