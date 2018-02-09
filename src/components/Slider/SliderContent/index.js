import React, { Component } from 'react';
import Text from '../../Text';
import './SliderContent.css';
import Paragraph from '../../Paragraph';
import SpacingContainer from '../../Containers/SpacingContainer';

class SliderContent extends Component {
  render() {
    return (
      <div className="slidercontent">
        <img
          className="slidercontent__image"
          src={this.props.imageSrc}
          alt={this.props.imageAlt}
        />
        <div className="slidercontent__text">
          <div className="slidercontent__paragraph">
            <SpacingContainer mh>
              <Paragraph center noSpacing>
                <Text text={this.props.text} fontSize="LARGE" />
              </Paragraph>
            </SpacingContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderContent;
