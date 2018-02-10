import React, { PureComponent } from 'react';
import './Hero.css';
import ContactButton from '../Buttons/ContactButton';
import Text from '../Text';
import AlignContainer from '../Containers/AlignContainer';
import ContentContainer from '../Containers/ContentContainer';
import heroImage from './hero-image.png';
import SpacingContainer from '../Containers/SpacingContainer';

class Hero extends PureComponent {
  render() {
    return (
      <div className="hero">
        <ContentContainer ph>
          <div className="hero__content">
            <AlignContainer vc>
              <div>
                <h1 className="hero__title">
                  <Text
                    text="Charlie Jackson"
                    fontSize="XX_LARGE"
                    color="BLUE"
                  />
                  <Text text=" here!" fontSize="XX_LARGE" />
                </h1>
                <SpacingContainer mt>
                  <h2 className="hero__subtitle">
                    <Text
                      text="Freelance developer and UX designer"
                      fontSize="XX_LARGE"
                    />
                  </h2>
                </SpacingContainer>
                <SpacingContainer mt2>
                  <ContactButton text="Hire me" />
                </SpacingContainer>
              </div>
            </AlignContainer>

            <img
              className="hero__image"
              src={heroImage}
              alt="Charlie Jackson pulling a silly face"
            />
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default Hero;
