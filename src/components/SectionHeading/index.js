// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeading.css';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';

const SectionHeading = ({
  halfBottomSpacing,
  text,
  color,
}: {
  halfBottomSpacing?: boolean,
  text: string,
  color?: ?string,
}) => (
  <SpacingContainer pt2 pb2={!halfBottomSpacing} pb={halfBottomSpacing} ph>
    <h3 className="sectionheading">
      <Text fontSize="X_LARGE" bold text={text} color={color} />
    </h3>
  </SpacingContainer>
);

SectionHeading.propTypes = {
  halfBottomSpacing: PropTypes.bool,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

SectionHeading.defaultProps = {
  halfBottomSpacing: false,
  color: null,
};

export default SectionHeading;
