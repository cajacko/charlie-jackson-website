import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';

const SocialListItem = ({ icon, url, title }) => (
  <li className="Social-listItem">
    <a className="Social-link" target="_blank" rel="noopener noreferrer" href={url}>
      <span className="Social-text">{title}</span>
      <Icon icon={icon} />
    </a>
  </li>
);

SocialListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialListItem;
