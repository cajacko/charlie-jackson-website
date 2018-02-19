import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';
import './SocialIcon.css';

class SocialIcon extends PureComponent {
  render() {
    return (
      <div className={`socialicon ${this.props.isContact ? 'socialicon--contact' : ''}`}>
      <Link href={this.props.href}>
        <div
          className={`socialicon__wrapper socialicon__wrapper--${this.props.icon} ${
            this.props.light ? 'socialicon__wrapper--light' : 'socialicon__wrapper--color'
          }`}
        >
          <SpacingContainer pr pl>
            <AlignContainer vc>
              <Icon icon={this.props.icon} size={this.props.size} />
            </AlignContainer>
          </SpacingContainer>
        </div>
      </Link>
      </div>
    );
  }
}

export default SocialIcon;
