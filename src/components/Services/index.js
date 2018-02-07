import React, { Component } from 'react';
import './Services.css';
import Text from '../Text';
import services from './services';
import ContactButton from '../Buttons/ContactButton';
import ContentContainer from '../Containers/ContentContainer';
import SectionHeading from '../SectionHeading';
import IconSliderNav from '../IconSlider/IconSliderNav';

class Services extends Component {
  render() {
    return (
      <section>
        <header className="services__header">
          <ContentContainer>
            <div className="services__headerwrap">
              <SectionHeading text="I can build" />
              <IconSliderNav services={services} active={services[0].label} />
            </div>
          </ContentContainer>
        </header>
        <div>
          <img src={services[0].image} alt={services[0].imageAlt} />
          <Text text={services[0].text} />
        </div>
        <footer>
          <ContactButton />
        </footer>
      </section>
    );
  }
}

export default Services;
