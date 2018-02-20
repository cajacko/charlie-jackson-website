import React, { Component } from 'react';
import './Services.css';
import {services} from '../../constants/data';
import ContactButton from '../Buttons/ContactButton';
import ContentContainer from '../Containers/ContentContainer';
import SectionHeading from '../SectionHeading';
import IconSliderNav from '../Slider/IconSliderNav';
import ServiceContent from '../ServiceContent';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';

class Services extends Component {
  state = {
    displayedIndex: 0,
  };

  constructor(props) {
    super(props);

    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  changeActiveItem(selectedLabel) {
    let { displayedIndex } = this.state;

    services.forEach(({ label }, i) => {
      if (selectedLabel === label) displayedIndex = i;
    });

    if (displayedIndex !== this.state.displayedIndex) {
      this.setState({ displayedIndex });
    }
  }

  render() {
    const { label, image, imageAlt, text } = services[
      this.state.displayedIndex
    ];

    return (
      <section>
        <header className="services__header">
          <ContentContainer>
              <div>
                <SectionHeading text="I can build" />
              </div>
              <IconSliderNav
                services={services}
                active={label}
                onChange={this.changeActiveItem}
              />
          </ContentContainer>
        </header>
        <SpacingContainer mv2>
          <ContentContainer>
            <ServiceContent imageSrc={image} imageAlt={imageAlt} text={text} />
          </ContentContainer>
        </SpacingContainer>
        <SpacingContainer mv2 mh>
          <AlignContainer hc>
            <ContactButton />
          </AlignContainer>
        </SpacingContainer>
      </section>
    );
  }
}

export default Services;
