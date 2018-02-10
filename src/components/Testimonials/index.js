import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import SpacingContainer from '../Containers/SpacingContainer';
import ContentContainer from '../Containers/ContentContainer';
import Testimonial from '../Testimonial';
import testimonials from './testimonials';
import DotSliderNav from '../Slider/DotSliderNav';

class Work extends PureComponent {
  render() {
    const { quote, image, name, imageAlt } = testimonials[0];

    return (
      <ContentSpotlight title="Some may say">
        <Testimonial
          quote={quote}
          image={image}
          name={name}
          imageAlt={imageAlt}
        />
        <DotSliderNav content={testimonials.map((c, i) => i)} />
      </ContentSpotlight>
    );
  }
}

export default Work;
