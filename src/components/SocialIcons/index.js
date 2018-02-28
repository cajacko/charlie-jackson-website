// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { socialIcons as icons } from '../../constants/data';
import SocialIcon from '../SocialIcon';
import HorizontalList from '../Lists/HorizontalList';

const SocialIcons = ({
  includeContact,
  large,
  light,
}: {
  includeContact?: ?boolean,
  large?: ?boolean,
  light?: ?boolean,
}) => {
  if (!icons || !icons.length) return null;

  return (
    <HorizontalList
      list={icons
        .filter(({ isContact }) => !isContact || (isContact && includeContact))
        .map(({ icon, url, isContact }) => ({
          key: icon,
          component: (
            <SocialIcon
              href={url}
              icon={icon}
              size={large ? 'LARGE' : 'MEDIUM'}
              light={light}
              isContact={!!isContact}
            />
          ),
        }))}
    />
  );
};

SocialIcons.propTypes = {
  includeContact: PropTypes.bool,
  large: PropTypes.bool,
  light: PropTypes.bool,
};

SocialIcons.defaultProps = {
  includeContact: false,
  large: false,
  light: false,
};

export default SocialIcons;
