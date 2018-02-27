// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { socialIcons as icons } from '../../constants/data';
import SocialIcon from '../SocialIcon';
import HorizontalList from '../Lists/HorizontalList';

class SocialIcons extends PureComponent {
  render() {
    if (!icons || !icons.length) return null;

    return (
      <HorizontalList
        list={icons
          .filter(({ isContact }) =>
              !isContact || (isContact && this.props.includeContact))
          .map(({ icon, url, isContact }) => ({
            key: icon,
            component: (
              <SocialIcon
                href={url}
                icon={icon}
                size={this.props.large ? 'LARGE' : 'MEDIUM'}
                light={this.props.light}
                isContact={!!isContact}
              />
            ),
          }))}
      />
    );
  }
}

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
