import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectLoopItem = ({
  url,
  image,
  imageAlt,
  title,
  lastUpdated,
  excerpt,
}) => (
  <article className="ProjectLoopItem">
    <Link className="ProjectLoopItem-imageLink" to={url}>
      <img width="150" height="150" src={image} className="ProjectLoopItem-image wp-post-image" alt={imageAlt} />
    </Link>

    <div className="ProjectLoopItem-text">
      <Link className="ProjectLoopItem-titleLink" to={url}>
        <h3 className="ProjectLoopItem-title">{title}</h3>
      </Link>

      <div className="ProjectLoopItem-meta">
        <p className="ProjectLoopItem-date">Last Updated: {lastUpdated}</p>
      </div>

      <div className="ProjectLoopItem-content">
        <p>{excerpt}</p>
      </div>

      <Link className="ProjectLoopItem-readMore" to={url}>Read More</Link>
    </div>
  </article>
);

ProjectLoopItem.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ProjectLoopItem;
