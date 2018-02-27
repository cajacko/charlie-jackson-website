// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from '../Containers/ContentContainer';
import SpacingContainer from '../Containers/SpacingContainer';
import SectionHeading from '../SectionHeading';
import './ContentSpotlight.css';

const ContentSpotlight = ({
  noBackground,
  children,
  title,
  halfContentVerticalSpacing,
  theme,
}: {
  noBackground?: boolean,
  children: React.Node,
  title: string,
  halfContentVerticalSpacing?: boolean,
  theme?: ?string,
}) => {
  let classes = 'contentspotlight';
  let headingColor = 'BLACK';
  let headingHalfBottomSpacing = false;
  let contentHalfBottomMargin = false;

  const setBackground = (background) => {
    if (!noBackground) classes += ` ${background}`;
  };

  switch (theme) {
    case 'DARK':
      setBackground('contentspotlight--dark');

      headingColor = 'WHITE';
      break;

    case 'LIGHT':
      setBackground('contentspotlight--light');
      break;

    default:
      break;
  }

  if (halfContentVerticalSpacing) {
    headingHalfBottomSpacing = true;
    contentHalfBottomMargin = true;
  }

  return (
    <div className={classes}>
      <ContentContainer>
        <div className="contentspotlight__wrapper">
          <SectionHeading
            text={title}
            color={headingColor}
            halfBottomSpacing={headingHalfBottomSpacing}
          />
          <SpacingContainer
            ph
            pb2={!contentHalfBottomMargin}
            pb={contentHalfBottomMargin}
          >
            {children}
          </SpacingContainer>
        </div>
      </ContentContainer>
    </div>
  );
};

ContentSpotlight.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  halfContentVerticalSpacing: PropTypes.bool,
  theme: PropTypes.string,
  noBackground: PropTypes.bool,
};

ContentSpotlight.defaultProps = {
  halfContentVerticalSpacing: false,
  theme: null,
  noBackground: false,
};

export default ContentSpotlight;
