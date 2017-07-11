import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import dateString from 'helpers/dateString';

const Project = ({ fields }) => {
  const date = dateString(fields.displayDate['en-GB']);

  return (
    <article className="Project">
      <h2 className="Project-title">{fields.title['en-GB']}</h2>
      <div className="Project-meta">
        <p className="Project-date">Last Updated: {date}</p>
      </div>

      <ReactMarkdown source={fields.content['en-GB']} />
    </article>
  );
};

Project.propTypes = {
  fields: PropTypes.shape({
    displayDate: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    title: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
    content: PropTypes.shape({
      'en-GB': PropTypes.string,
    }),
  }).isRequired,
};

export default Project;
