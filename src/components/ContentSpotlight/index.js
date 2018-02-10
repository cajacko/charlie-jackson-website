import React, { PureComponent } from 'react';
import ContentContainer from '../Containers/ContentContainer';
import SpacingContainer from '../Containers/SpacingContainer';
import SectionHeading from '../SectionHeading';
import './ContentSpotlight.css';

class ContentSpotlight extends PureComponent {
  render() {
    let classes = 'contentspotlight';
    let headingColor = 'BLACK';

    switch (this.props.theme) {
      case 'DARK':
        classes += ' contentspotlight--dark';
        headingColor = 'WHITE';
        break;
      default:
        break;
    }

    return (
      <div className={classes}>
        <ContentContainer>
          <div className="contentspotlight__wrapper">
            <SectionHeading text={this.props.title} color={headingColor} />
            <SpacingContainer ph mb2>
              {this.props.children}
            </SpacingContainer>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default ContentSpotlight;
