import React, { Component } from 'react';
import './Services.css';
import services from './services';
import ContactButton from '../Buttons/ContactButton';
import ContentContainer from '../Containers/ContentContainer';
import SectionHeading from '../SectionHeading';
import IconSliderNav from '../IconSlider/IconSliderNav';
import SliderContent from '../Slider/SliderContent';
import SpacingContainer from '../Containers/SpacingContainer';

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
            <div className="services__headerwrap">
              <div>
                <SectionHeading text="I can build" />
              </div>
              <IconSliderNav
                services={services}
                active={label}
                onChange={this.changeActiveItem}
              />
            </div>
          </ContentContainer>
        </header>
        <SliderContent imageSrc={image} imageAlt={imageAlt} text={text} />
        <SpacingContainer mv2 mh>
          <footer className="services__footer">
            <ContactButton />
          </footer>
        </SpacingContainer>
      </section>
    );
  }
}

export default Services;
