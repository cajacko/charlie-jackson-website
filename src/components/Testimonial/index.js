import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Img from '../Img';
import './Testimonial.css';
import Paragraph from '../Paragraph';
import SpacingContainer from '../Containers/SpacingContainer';

class Testimonial extends Component {
  render() {
    const style = {};

    if (this.props.height) style.height = `${this.props.height}px`;

    return (
      <div className="testimonial" style={style}>
        <div className="testimonial__quote">
          <SpacingContainer mh>
            <Paragraph center noSpacing>
              <Text text={`"${this.props.quote}"`} fontSize="LARGE" />
            </Paragraph>
          </SpacingContainer>
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

Testimonial.propTypes = {
  height: PropTypes.number,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Testimonial.defaultProps = {
  height: null,
};

export default Testimonial;
