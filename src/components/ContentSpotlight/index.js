import React, { PureComponent } from 'react';
import ContentContainer from '../Containers/ContentContainer';
import SpacingContainer from '../Containers/SpacingContainer';
import SectionHeading from '../SectionHeading';
import './ContentSpotlight.css';

class ContentSpotlight extends PureComponent {
  render() {
    let classes = 'contentspotlight';
    let headingColor = 'BLACK';
    let headingHalfBottomSpacing = false;
    let contentHalfBottomMargin = true;

    switch (this.props.theme) {
      case 'DARK':
        classes += ' contentspotlight--dark';
        headingColor = 'WHITE';
        break;
      default:
        break;
    }

    if (this.props.halfContentVerticalSpacing) {
      headingHalfBottomSpacing = true;
      contentHalfBottomMargin = false;
    }

    return (
      <div className={classes}>
        <ContentContainer>
          <div className="contentspotlight__wrapper">
            <SectionHeading
              text={this.props.title}
              color={headingColor}
              halfBottomSpacing={headingHalfBottomSpacing}
            />
            <SpacingContainer
              ph
              mb2={!contentHalfBottomMargin}
              mb={contentHalfBottomMargin}
            >
              {this.props.children}
            </SpacingContainer>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default ContentSpotlight;
