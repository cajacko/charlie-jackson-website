import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';

const SocialListItem = ({ fields }) => (
  <li className="Social-listItem">
    <a className="Social-link" target="_blank" rel="noopener noreferrer" href={fields.url['en-GB']}>
      <span className="Social-text">{fields.name['en-GB']}</span>
      <Item itemId={fields.icon['en-GB'].sys.id} />
    </a>
  </li>
);

SocialListItem.propTypes = {
  fields: PropTypes.shape({
    url: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    name: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    icon: PropTypes.shape({
      'en-GB': PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default SocialListItem;
