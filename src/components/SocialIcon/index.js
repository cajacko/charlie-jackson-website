// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Button from '../Buttons/Button';
import Icon from '../Icon';
import AlignContainer from '../Containers/AlignContainer';
import './SocialIcon.css';

type Props = {
  href: string,
  icon: string,
  light?: ?boolean,
  size?: ?string,
  isContact?: ?boolean,
};

class SocialIcon extends PureComponent<Props> {
  static contextTypes = {
    showContactModal: PropTypes.func,
  };

  static propTypes = {
    icon: PropTypes.string.isRequired,
    light: PropTypes.bool,
    size: PropTypes.string,
    isContact: PropTypes.bool,
    href: PropTypes.string.isRequired,
  };

  static defaultProps = {
    light: false,
    size: null,
    isContact: false,
  };

  constructor(props: Props) {
    super(props);

    (this: any).action = this.action.bind(this);
  }

  action() {
    this.context.showContactModal();
  }

  render() {
    let classes = `socialicon__wrapper socialicon__wrapper--${this.props.icon}`;

    if (this.props.light) {
      classes += ' socialicon__wrapper--light';
    } else {
      classes += ' socialicon__wrapper--color';
    }

    if (this.props.size === 'LARGE') {
      classes += ' socialicon__wrapper--large';
    }

    const content = (
      <div className={classes}>
        <AlignContainer vc hc>
          <Icon reduceWithWidth icon={this.props.icon} size={this.props.size} />
        </AlignContainer>
      </div>
    );

    if (this.props.isContact) {
      return (
        <div className="socialicon socialicon--contact">
          <Button action={this.action}>{content}</Button>
        </div>
      );
    }

    return (
      <div className="socialicon">
        <Link href={this.props.href}>{content}</Link>
      </div>
    );
  }
}

export default SocialIcon;
