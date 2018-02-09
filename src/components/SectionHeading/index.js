import React, { Component } from 'react';
import './SectionHeading.css';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';

class SectionHeading extends Component {
  render() {
    return (
      <SpacingContainer mv2>
        <h3 className="sectionheading">
          <Text fontSize="X_LARGE" bold text={this.props.text} />
        </h3>
      </SpacingContainer>
    );
  }
}

export default SectionHeading;
