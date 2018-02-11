import React, { Component } from 'react';
import Text from '../Text';
import './ServiceContent.css';
import Paragraph from '../Paragraph';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';

class ServiceContent extends Component {
  render() {
    return (
      <div className="servicecontent">
        <SpacingContainer mh>
          <AlignContainer hc vc>
            <div className="servicecontent__imagewrapper">
              <img
                className="servicecontent__image"
                src={this.props.imageSrc}
                alt={this.props.imageAlt}
              />
            </div>
          </AlignContainer>
        </SpacingContainer>
        <div className="servicecontent__text">
          <div className="servicecontent__paragraph">
            <SpacingContainer mh>
              <Paragraph noSpacing>
                <Text text={this.props.text} fontSize="LARGE" />
              </Paragraph>
            </SpacingContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceContent;
