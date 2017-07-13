import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import dateString from 'helpers/dateString';

const Project = ({ displayDate, title, content }) => {
  const date = dateString(displayDate);

  return (
    <article className="Project">
      <h2 className="Project-title">{title}</h2>
      <div className="Project-meta">
        <p className="Project-date">Last Updated: {date}</p>
      </div>

      <ReactMarkdown source={content} />
    </article>
  );
};

Project.propTypes = {
  displayDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Project;
