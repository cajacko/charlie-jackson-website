import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import Testimonial from '../Testimonial';
import testimonials from './testimonials';
import DotSliderNav from '../Slider/DotSliderNav';
import SpacingContainer from '../Containers/SpacingContainer';
import './Testimonials.css';

class Testimonials extends PureComponent {
  state = {
    displayedIndex: 0,
  };

  constructor(props) {
    super(props);

    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  changeActiveItem(selectedName) {
    let { displayedIndex } = this.state;

    testimonials.forEach(({ name }, i) => {
      if (selectedName === name) displayedIndex = i;
    });

    if (displayedIndex !== this.state.displayedIndex) {
      this.setState({ displayedIndex });
    }
  }

  render() {
    const { quote, image, name, imageAlt } = testimonials[
      this.state.displayedIndex
    ];

    return (
      <ContentSpotlight title="Some may say">
        <div className="testimonials">
          <Testimonial
            quote={quote}
            image={image}
            name={name}
            imageAlt={imageAlt}
          />
          <footer>
            <SpacingContainer mt2>
              <div className="testimonials__navwrapper">
                <DotSliderNav
                  active={name}
                  content={testimonials}
                  onChange={this.changeActiveItem}
                />
              </div>
            </SpacingContainer>
          </footer>
        </div>
      </ContentSpotlight>
    );
  }
}

export default Testimonials;
