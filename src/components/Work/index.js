import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import { companies } from '../../constants/data';
import SpacingContainer from '../Containers/SpacingContainer';
import Img from '../Img';
import './Work.css';

class Work extends PureComponent {
  render() {
    return (
      <ContentSpotlight
        title="I've Worked With"
        theme="DARK"
        halfContentVerticalSpacing
      >
        <div className="work">
          {companies.map(({ image, imageAlt }) => (
            <div key={imageAlt} className="work__imagewrapper">
              <SpacingContainer mv mh>
                <Img contain src={image} alt={imageAlt} />
              </SpacingContainer>
            </div>
          ))}
        </div>
      </ContentSpotlight>
    );
  }
}

export default Work;
