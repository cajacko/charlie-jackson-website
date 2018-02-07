import React, { PureComponent } from 'react';
import SocialIcons from '../SocialIcons';
import ContactButton from '../Buttons/ContactButton';
import './SiteNav.css';
import SpacingContainer from '../Containers/SpacingContainer';
import ContentContainer from '../Containers/ContentContainer';

class SiteNav extends PureComponent {
  render() {
    return (
      <ContentContainer ph>
        <div className="sitenav">
          <SpacingContainer pr>
            <SocialIcons />
          </SpacingContainer>
          <SpacingContainer pl>
            <ContactButton />
          </SpacingContainer>
        </div>
      </ContentContainer>
    );
  }
}

export default SiteNav;
