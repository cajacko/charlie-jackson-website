// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Img from '../Img';
import './Testimonial.css';
import Paragraph from '../Paragraph';
import SpacingContainer from '../Containers/SpacingContainer';

const Testimonial = ({
  height,
  imageAlt,
  name,
  image,
  quote,
}: {
  height?: ?number,
  quote: string,
  image: string,
  name: string,
  imageAlt: string,
}) => {
  const style = {};

  if (height) style.height = `${height}px`;

  return (
    <div className="testimonial" style={style}>
      <div className="testimonial__quote">
        <SpacingContainer mh>
          <Paragraph center noSpacing>
            <Text text={`"${quote}"`} fontSize="LARGE" />
          </Paragraph>
        </SpacingContainer>
      </div>
      <SpacingContainer mb mt2>
        <div className="testimonial__image">
          <Img src={image} alt={imageAlt} fill />
        </div>
      </SpacingContainer>
      <Paragraph noSpacing>
        <Text text={name} />
      </Paragraph>
    </div>
  );
};

Testimonial.propTypes = {
  height: PropTypes.number,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

Testimonial.defaultProps = {
  height: null,
};

export default Testimonial;
