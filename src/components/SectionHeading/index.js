import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SectionHeading.css';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';

class SectionHeading extends Component {
  render() {
    return (
      <SpacingContainer
        pt2
        pb2={!this.props.halfBottomSpacing}
        pb={this.props.halfBottomSpacing}
        ph
      >
        <h3 className="sectionheading">
          <Text
            fontSize="X_LARGE"
            bold
            text={this.props.text}
            color={this.props.color}
          />
        </h3>
      </SpacingContainer>
    );
  }
}

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
