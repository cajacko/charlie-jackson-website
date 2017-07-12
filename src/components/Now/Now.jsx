import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Item from 'containers/Item/Item';

const Now = ({ fields }) => (
  <section className="Now">
    <h2 className="Now-title">{fields.title['en-GB']}</h2>
    <ReactMarkdown source={fields.content['en-GB']} />

    <ul className="Now-imageList">
      {
        fields.images['en-GB'].map(({ sys }) => (
          <li key={sys.id} className="Now-imageListItem">
            <Item itemId={sys.id} asset width={360} height={360} />
          </li>
        ))
      }
    </ul>
  </section>
);

Now.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    content: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    images: PropTypes.shape({
      'en-GB': PropTypes.arrayOf(PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default Now;
