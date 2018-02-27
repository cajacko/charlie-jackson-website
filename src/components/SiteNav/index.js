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
      <div className="sitenav">
        <SpacingContainer pt pb>
          <ContentContainer ph>
            <div className="sitenav__wrapper">
              <div className="sitenav__icons">
                <SocialIcons light includeContact />
              </div>

              <div className="sitenav__contact">
                <SpacingContainer pl>
                  <AlignContainer vc>
                    <ContactButton theme="LIGHT" />
                  </AlignContainer>
                </SpacingContainer>
              </div>
            </div>
          </ContentContainer>
        </SpacingContainer>
      </div>
    );
  }
}

export default SiteNav;
