import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from 'containers/Item/Item';
import dateString from 'helpers/dateString';

const ProjectLoopItem = ({ fields }) => {
  const url = `/${fields.slug['en-GB']}`;
  const date = dateString(fields.displayDate['en-GB']);

  return (
    <article className="ProjectLoopItem">
      <Link className="ProjectLoopItem-imageLink" to={url}>
        <Item width={200} asset itemId={fields.thumbnailImage['en-GB'].sys.id} className="ProjectLoopItem-image wp-post-image" />
      </Link>

      <div className="ProjectLoopItem-text">
        <Link className="ProjectLoopItem-titleLink" to={url}>
          <h3 className="ProjectLoopItem-title">{fields.title['en-GB']}</h3>
        </Link>

        <div className="ProjectLoopItem-meta">
          <p className="ProjectLoopItem-date">Last Updated: {date}</p>
        </div>

        <div className="ProjectLoopItem-content">
          <p>{fields.excerpt['en-GB']}</p>
        </div>

        <Link className="ProjectLoopItem-readMore" to={url}>Read More</Link>
      </div>
    </article>
  );
};

ProjectLoopItem.propTypes = {
  fields: PropTypes.shape({
    displayDate: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    slug: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    title: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    excerpt: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    thumbnailImage: PropTypes.shape({
      'en-GB': PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default ProjectLoopItem;
