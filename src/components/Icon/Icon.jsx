import React from 'react';
import PropTypes from 'prop-types';
import Instagram from 'components/Icon/Instagram';
import Twitter from 'components/Icon/Twitter';
import GitHub from 'components/Icon/GitHub';
import LinkedIn from 'components/Icon/LinkedIn';
import Pinterest from 'components/Icon/Pinterest';
import Email from 'components/Icon/Email';
import YouTube from 'components/Icon/YouTube';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'instagram':
      return <Instagram />;
    case 'twitter':
      return <Twitter />;
    case 'github':
      return <GitHub />;
    case 'linkedin':
      return <LinkedIn />;
    case 'pinterest':
      return <Pinterest />;
    case 'email':
      return <Email />;
    case 'youtube':
      return <YouTube />;
    default:
      return null;
  }
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
