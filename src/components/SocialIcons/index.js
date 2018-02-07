import React, { PureComponent } from 'react';
import icons from './icons';
import SocialIcon from '../SocialIcon';

class SocialIcons extends PureComponent {
  render() {
    return (
      <ul>
        {!!icons &&
          !!icons.length &&
          icons.map(({ icon, url }) => (
            <SocialIcon id={icon} href={url} icon={icon} />
          ))}
      </ul>
    );
  }
}

export default SocialIcons;
