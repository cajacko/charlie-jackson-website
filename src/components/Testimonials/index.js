import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import SpacingContainer from '../Containers/SpacingContainer';
import ContentContainer from '../Containers/ContentContainer';
import Testimonial from '../Testimonial';
import image from './profile-pic.png';

class Work extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Some may say">
        <Testimonial
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          image={image}
          name="Charlie Jackson"
        />
      </ContentSpotlight>
    );
  }
}

export default Work;
