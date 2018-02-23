import React, { Component } from 'react';
import './Services.css';
import { services } from '../../constants/data';
import ContactButton from '../Buttons/ContactButton';
import ContentContainer from '../Containers/ContentContainer';
import SectionHeading from '../SectionHeading';
import IconSliderNav from '../Slider/IconSliderNav';
import ServiceContent from '../ServiceContent';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';
import Slider from '../Slider/Slider';

class Services extends Component {
  render() {
    return (
      <section>
        <Slider
          slides={services}
          nav={(index, onChange, items) => (
            <header className="services__header">
              <ContentContainer>
                <div>
                  <SectionHeading text="I can build" />
                </div>
                <IconSliderNav
                  active={index}
                  onChange={onChange}
                  items={items}
                />
              </ContentContainer>
            </header>
          )}
          slide={({ image, imageAlt, text }, index, height) => (
            <ServiceContent
              imageSrc={image}
              imageAlt={imageAlt}
              text={text}
              height={height}
            />
          )}
        />
        <SpacingContainer mb2 mh>
          <AlignContainer hc>
            <ContactButton />
          </AlignContainer>
        </SpacingContainer>
      </section>
    );
  }
}

export default Services;
