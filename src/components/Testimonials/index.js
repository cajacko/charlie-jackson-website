import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import SliderContent from '../Slider/SliderContent';

class Work extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Some may say">
        <SliderContent />
      </ContentSpotlight>
    );
  }
}

export default Work;
