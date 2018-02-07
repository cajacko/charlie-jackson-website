import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';

class SocialIcons extends PureComponent {
  render() {
    return (
      <Link href={this.props.href}>
        <Icon icon="twitter" />
      </Link>
    );
  }
}

export default SocialIcons;
