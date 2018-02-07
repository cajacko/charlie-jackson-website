import React, { PureComponent } from 'react';
import Link from '../Link';
import Icon from '../Icon';
import './SocialIcon.css';

class SocialIcon extends PureComponent {
  render() {
    return (
      <Link href={this.props.href}>
        <div className="socialicon">
          <Icon icon="twitter" size={this.props.size} />
        </div>
      </Link>
    );
  }
}

export default SocialIcon;
