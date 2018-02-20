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
        <div className="servicecontent__wrapper">
          <SpacingContainer mh>
              <div className="servicecontent__imagewrapper" style={{ backgroundImage: `url('${this.props.imageSrc}')`}} />
          </SpacingContainer>
        </div>
        <div className="servicecontent__text">
          <AlignContainer vc>
          <div className="servicecontent__paragraph">
            <SpacingContainer mh>
              <Paragraph noSpacing>
                <Text text={this.props.text} fontSize="LARGE" />
              </Paragraph>
            </SpacingContainer>
          </div>
          </AlignContainer>
        </div>
      </div>
    );
  }
}

export default ServiceContent;
