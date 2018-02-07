import React, { PureComponent } from 'react';
import SocialIcons from '../SocialIcons';
import ContactButton from '../Buttons/ContactButton';

class SiteNav extends PureComponent {
  render() {
    return (
      <div>
        <SocialIcons />
        <ContactButton />
      </div>
    );
  }
}

export default SiteNav;
