import React, { Component } from 'react';
import Text from '../../Text';
import './SliderContent.css';
import Paragraph from '../../Paragraph';
import SpacingContainer from '../../Containers/SpacingContainer';
import AlignContainer from '../../Containers/AlignContainer';
import ContentContainer from '../../Containers/ContentContainer';

class SliderContent extends Component {
  render() {
    return (
      <SpacingContainer mv2>
        <ContentContainer>
          <div className="slidercontent">
            <SpacingContainer mh>
              <AlignContainer hc vc>
                <div className="slidercontent__imagewrapper">
                  <img
                    className="slidercontent__image"
                    src={this.props.imageSrc}
                    alt={this.props.imageAlt}
                  />
                </div>
              </AlignContainer>
            </SpacingContainer>
            <div className="slidercontent__text">
              <div className="slidercontent__paragraph">
                <SpacingContainer mh>
                  <Paragraph noSpacing>
                    <Text text={this.props.text} fontSize="LARGE" />
                  </Paragraph>
                </SpacingContainer>
              </div>
            </div>
          </div>
        </ContentContainer>
      </SpacingContainer>
    );
  }
}

export default SliderContent;
