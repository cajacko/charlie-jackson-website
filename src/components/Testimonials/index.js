import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import Testimonial from '../Testimonial';
import testimonials from './testimonials';
import DotSliderNav from '../Slider/DotSliderNav';
import SpacingContainer from '../Containers/SpacingContainer';
import './Testimonials.css';

class Testimonials extends PureComponent {
  render() {
    const { quote, image, name, imageAlt } = testimonials[0];

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
                <DotSliderNav content={testimonials.map((c, i) => i)} />
              </div>
            </SpacingContainer>
          </footer>
        </div>
      </ContentSpotlight>
    );
  }
}

export default Testimonials;
