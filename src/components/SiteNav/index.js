import React, { PureComponent } from 'react';
import SocialIcons from '../SocialIcons';
import ContactButton from '../Buttons/ContactButton';
import './SiteNav.css';
import SpacingContainer from '../Containers/SpacingContainer';
import ContentContainer from '../Containers/ContentContainer';
import AlignContainer from '../Containers/AlignContainer';

class SiteNav extends PureComponent {
  render() {
    return (
      <SpacingContainer mt mb>
        <ContentContainer ph>
          <div className="sitenav">
            <SocialIcons />
            <div>
              <SpacingContainer pl>
                <AlignContainer vc>
                  <ContactButton />
                </AlignContainer>
              </SpacingContainer>
            </div>
          </div>
        </ContentContainer>
      </SpacingContainer>
    );
  }
}

export default SiteNav;
