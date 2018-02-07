import React, { Component } from 'react';
import './SectionHeading.css';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';

class SectionHeading extends Component {
  render() {
    return (
      <SpacingContainer mt2 mb2>
        <h3 className="sectionheading">
          <Text fontSize="LARGE" bold text={this.props.text} />
        </h3>
      </SpacingContainer>
    );
  }
}

export default SectionHeading;
