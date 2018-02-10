import React, { Component } from 'react';
import './SectionHeading.css';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';

class SectionHeading extends Component {
  render() {
    return (
      <SpacingContainer
        mt2
        mb2={!this.props.halfBottomSpacing}
        mb={this.props.halfBottomSpacing}
        ph
      >
        <AlignContainer hc>
          <h3 className="sectionheading">
            <Text
              fontSize="X_LARGE"
              bold
              text={this.props.text}
              color={this.props.color}
            />
          </h3>
        </AlignContainer>
      </SpacingContainer>
    );
  }
}

export default SectionHeading;
