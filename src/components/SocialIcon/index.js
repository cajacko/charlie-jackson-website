import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Button from '../Buttons/Button';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';
import './SocialIcon.css';

class SocialIcon extends PureComponent {
  constructor(props) {
    super(props);

    this.action = this.action.bind(this);
  }

  action() {
    this.context.showContactModal();
  }

  render() {
    const content = (
      <div
        className={`socialicon__wrapper socialicon__wrapper--${
          this.props.icon
        } ${
          this.props.light
            ? 'socialicon__wrapper--light'
            : 'socialicon__wrapper--color'
        }`}
      >
        <SpacingContainer pr pl>
          <AlignContainer vc>
            <Icon reduceWithWidth icon={this.props.icon} size={this.props.size} />
          </AlignContainer>
        </SpacingContainer>
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

SocialIcon.contextTypes = {
  showContactModal: PropTypes.func,
};


export default SocialIcon;
