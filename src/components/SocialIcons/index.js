import React, { PureComponent } from 'react';
import icons from './icons';
import SocialIcon from '../SocialIcon';
import HorizontalList from '../Lists/HorizontalList';

class SocialIcons extends PureComponent {
  render() {
    if (!icons || !icons.length) return null;

    return (
      <HorizontalList
        list={icons.map(({ icon, url }, i) => ({
          key: icon,
          component: (
            <SocialIcon
              href={url}
              icon={icon}
              size={this.props.large ? 'LARGE' : 'MEDIUM'}
              light={this.props.light}
            />
          ),
        }))}
      />
    );
  }
}

export default SocialIcons;
