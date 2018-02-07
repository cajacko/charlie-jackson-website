import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';

class SocialIcon extends PureComponent {
  render() {
    return (
      <Link href={this.props.href}>
        <SpacingContainer pr={!this.props.last} pl={!this.props.first}>
          <Icon icon="twitter" size={this.props.size} />
        </SpacingContainer>
      </Link>
    );
  }
}

export default SocialIcon;
