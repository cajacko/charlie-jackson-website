import React from 'react';
import PropTypes from 'prop-types';

const ProjectLoopItem = ({
  url,
  image,
  imageAlt,
  title,
  lastUpdated,
  excerpt,
}) => (
  <article className="ProjectLoopItem">
    <a className="ProjectLoopItem-imageLink" href={url}>
      <img width="150" height="150" src={image} className="ProjectLoopItem-image wp-post-image" alt={imageAlt} />
    </a>

    <div className="ProjectLoopItem-text">
      <a className="ProjectLoopItem-titleLink" href={url}>
        <h3 className="ProjectLoopItem-title">{title}</h3>
      </a>

      <div className="ProjectLoopItem-meta">
        <p className="ProjectLoopItem-date">Last Updated: {lastUpdated}</p>
      </div>

      <div className="ProjectLoopItem-content">
        <p>{excerpt}</p>
      </div>

      <a className="ProjectLoopItem-readMore" href="/mantra/">Read More</a>
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
