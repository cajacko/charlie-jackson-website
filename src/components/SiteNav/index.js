import React, { PureComponent } from 'react';
import SocialIcons from '../SocialIcons';
import ContactButton from '../Buttons/ContactButton';
import './SiteNav.css';
import SpacingContainer from '../Containers/SpacingContainer';
import ContentContainer from '../Containers/ContentContainer';

class SiteNav extends PureComponent {
  render() {
    return (
      <SpacingContainer mt mb>
        <ContentContainer ph>
          <div className="sitenav">
            <SocialIcons />
            <SpacingContainer pl>
              <ContactButton />
            </SpacingContainer>
          </div>
        </ContentContainer>
      </SpacingContainer>
    );
  }
}

export default SiteNav;
