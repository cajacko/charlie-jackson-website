import React, { PureComponent } from 'react';
import './Hero.css';
import ContactButton from '../Buttons/ContactButton';
import Text from '../Text';
import AlignContainer from '../Containers/AlignContainer';
import ContentContainer from '../Containers/ContentContainer';
import heroImage from './hero-image.png';

class Hero extends PureComponent {
  render() {
    return (
      <div className="hero">
        <ContentContainer ph>
          <div className="hero__content">
            <AlignContainer vc>
              <div>
                <h1>
                  <Text text="Charlie Jackson" />
                  <Text text=" here!" />
                </h1>
                <h2>
                  <Text text="Freelance developer and UX designer" />
                </h2>
                <ContactButton text="Hire me" />
              </div>
            </AlignContainer>

            <img className="hero__image" src={heroImage} />
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default Hero;
