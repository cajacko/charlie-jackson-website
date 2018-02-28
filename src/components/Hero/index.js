// @flow

import React from 'react';
import './Hero.css';
import ContactButton from '../Buttons/ContactButton';
import Text from '../Text';
import ContentContainer from '../Containers/ContentContainer';
import SpacingContainer from '../Containers/SpacingContainer';

const Hero = () => (
  <div className="hero">
    <div className="hero__wrapper">
      <ContentContainer ph pv>
        <div className="hero__content">
          <div>
            <h1 className="hero__title">
              <Text
                text="Charlie Jackson"
                fontSize="XX_LARGE"
                color="WHITE"
                bold
              />
              <Text text=" here!" fontSize="XX_LARGE" color="WHITE" />
            </h1>
            <SpacingContainer mt>
              <h2 className="hero__subtitle">
                <Text
                  text="Freelance developer and UX designer"
                  fontSize="XX_LARGE"
                  color="WHITE"
                />
              </h2>
            </SpacingContainer>
            <SpacingContainer mt2>
              <ContactButton text="Hire me" theme="LIGHT" />
            </SpacingContainer>
          </div>
        </div>
      </ContentContainer>
    </div>
  </div>
);

export default Hero;
