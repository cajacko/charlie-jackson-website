import React, { Component } from 'react';
import Text from '../Text';
import Img from '../Img';
import './Testimonial.css';
import Paragraph from '../Paragraph';
import SpacingContainer from '../Containers/SpacingContainer';

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
        <div className="testimonial__quote">
          <Paragraph center noSpacing>
            <Text text={`"${this.props.quote}`} fontSize="LARGE" />
          </Paragraph>
        </div>
        <SpacingContainer mb mt2>
          <div className="testimonial__image">
            <Img src={this.props.image} imageAlt="Hello" fill />
          </div>
        </SpacingContainer>
        <Paragraph noSpacing>
          <Text text={this.props.name} />
        </Paragraph>
      </div>
    );
  }
}

export default Testimonial;
