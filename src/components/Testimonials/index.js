import React, { PureComponent } from 'react';
import Testimonial from '../Testimonial';
import { testimonials } from '../../constants/data';
import DotSliderNav from '../Slider/DotSliderNav';
import SpacingContainer from '../Containers/SpacingContainer';
import Slider from '../Slider/Slider';
import ContentContainer from '../Containers/ContentContainer';
import SectionHeading from '../SectionHeading';
import './Testimonials.css';

class Testimonials extends PureComponent {
  render() {
    return (
      <section>
        <ContentContainer>
          <SectionHeading text="Some may say" />
        </ContentContainer>

        <Slider
          slides={testimonials}
          slide={({
 quote, image, imageAlt, name,
}, index, height) => (
  <Testimonial
    quote={quote}
    image={image}
    name={name}
    imageAlt={imageAlt}
    height={height}
  />
          )}
          bottom
          nav={(index, onChange, items) => (
            <footer>
              <SpacingContainer mv2>
                <div className="testimonials__navwrapper">
                  <DotSliderNav
                    active={index}
                    content={items}
                    onChange={onChange}
                  />
                </div>
              </SpacingContainer>
            </footer>
          )}
        />
      </section>
    );
  }
}

export default Testimonials;
