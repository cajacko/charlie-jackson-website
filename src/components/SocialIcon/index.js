import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';
import './SocialIcon.css';

class SocialIcon extends PureComponent {
  render() {
    return (
      <Link href={this.props.href}>
        <div
          className={`socialicon socialicon--${this.props.icon} ${
            this.props.light ? 'socialicon--light' : 'socialicon--color'
          }`}
        >
          <SpacingContainer pr pl>
            <AlignContainer vc>
              <Icon icon={this.props.icon} size={this.props.size} />
            </AlignContainer>
          </SpacingContainer>
        </div>
      </Link>
    );
  }
}

export default SocialIcon;
