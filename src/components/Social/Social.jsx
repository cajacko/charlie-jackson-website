import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';

const Social = ({ fields }) => (
  <section className="Social">
    <h2 className="Social-title">{fields.title['en-GB']}</h2>
    <ul className="Social-list">
      {
        fields.socialIcons['en-GB'].map(({ sys }) => (
          <Item key={sys.id} itemId={sys.id} />
        ))
      }
    </ul>
  </section>
);

Social.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    socialIcon: PropTypes.shape({
      'en-GB': PropTypes.arrayOf(PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default Social;
