// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import './ServiceContent.css';
import Paragraph from '../Paragraph';
import SpacingContainer from '../Containers/SpacingContainer';
import AlignContainer from '../Containers/AlignContainer';
import ContentContainer from '../Containers/ContentContainer';

const ServiceContent = ({
  height,
  imageSrc,
  text,
}: {
  height?: ?number,
  imageSrc: string,
  text: string,
}) => {
  const style = {};

  if (height) style.height = `${height}px`;

  return (
    <div style={style}>
      <SpacingContainer pv2>
        <ContentContainer>
          <div className="servicecontent">
            <div className="servicecontent__wrapper">
              <SpacingContainer mh>
                <div
                  className="servicecontent__imagewrapper"
                  style={{ backgroundImage: `url('${imageSrc}')` }}
                />
              </SpacingContainer>
            </div>
            <div className="servicecontent__text">
              <AlignContainer vc>
                <div className="servicecontent__paragraph">
                  <SpacingContainer mh>
                    <Paragraph noSpacing>
                      <Text text={text} fontSize="LARGE" />
                    </Paragraph>
                  </SpacingContainer>
                </div>
              </AlignContainer>
            </div>
          </div>
        </ContentContainer>
      </SpacingContainer>
    </div>
  );
};

ServiceContent.propTypes = {
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.number,
};

ServiceContent.defaultProps = {
  height: null,
};

export default ServiceContent;
