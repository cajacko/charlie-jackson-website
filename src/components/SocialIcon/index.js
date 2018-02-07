import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';
import './SocialIcon.css';

class SocialIcon extends PureComponent {
  render() {
    return (
      <Link href={this.props.href}>
        <SpacingContainer pr pl>
          <div className="socialicon">
            <Icon icon="twitter" size={this.props.size} />
          </div>
        </SpacingContainer>
      </Link>
    );
  }
}

export default SocialIcon;
