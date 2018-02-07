import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';

class SocialIcon extends PureComponent {
  render() {
    return (
      <Link href={this.props.href}>
        <SpacingContainer pr pl>
          <AlignContainer vc>
            <Icon icon="twitter" size={this.props.size} />
          </AlignContainer>
        </SpacingContainer>
      </Link>
    );
  }
}

export default SocialIcon;
