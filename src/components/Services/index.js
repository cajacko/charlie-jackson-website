import React, { Component } from 'react';
import './Services.css';
import Text from '../Text';
import services from './services';
import ContactButton from '../Buttons/ContactButton';
import ContentContainer from '../Containers/ContentContainer';
import SectionHeading from '../SectionHeading';
import IconSliderNav from '../IconSlider/IconSliderNav';
import SliderContent from '../Slider/SliderContent';

class Services extends Component {
  render() {
    return (
      <section>
        <header className="services__header">
          <ContentContainer>
            <div className="services__headerwrap">
              <div>
                <SectionHeading text="I can build" />
              </div>
              <IconSliderNav services={services} active={services[0].label} />
            </div>
          </ContentContainer>
        </header>
        <SliderContent
          imageSrc={services[0].image}
          imageAlt={services[0].imageAlt}
          text={services[0].text}
        />
        <footer>
          <ContactButton />
        </footer>
      </section>
    );
  }
}

export default Services;
