// @flow

import React from 'react';
import ContentSpotlight from '../ContentSpotlight';
import { companies } from '../../constants/data';
import SpacingContainer from '../Containers/SpacingContainer';
import Img from '../Img';
import './Work.css';

/**
 * Display the work component, shows a loop of company logos
 *
 * @return {ReactElement} Markup to render
 */
const Work = () => (
  <ContentSpotlight
    title="I've Worked With"
    theme="DARK"
    halfContentVerticalSpacing
  >
    <div className="work">
      {companies.map(({ image, imageAlt }) => (
        <div key={imageAlt} className="work__imagewrapper">
          <SpacingContainer mv mh flex>
            <Img contain src={image} alt={imageAlt} />
          </SpacingContainer>
        </div>
      ))}
    </div>
  </ContentSpotlight>
);

export default Work;
