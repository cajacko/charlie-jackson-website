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
            <li key={icon}>
              <SocialIcon href={url} icon={icon} />
            </li>
          ))}
      </ul>
    );
  }
}

export default SocialIcons;
