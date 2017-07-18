import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import dateString from 'helpers/dateString';
import Item from 'containers/Item/Item';

const Project = ({ displayDate, title, content, contentComponents }) => {
  const date = dateString(displayDate);

  let contentElement;

  if (contentComponents) {
    contentElement = (
      <div>
        {
          contentComponents.map(componentId => (
            <Item key={componentId} itemId={componentId} />
          ))
        }
      </div>
    );
  } else {
    contentElement = <ReactMarkdown source={content} />;
  }

  return (
    <article className="Project">
      <h2 className="Project-title">{title}</h2>
      <div className="Project-meta">
        <p className="Project-date">Last Updated: {date}</p>
      </div>

      {contentElement}
    </article>
  );
};

Project.propTypes = {
  displayDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponents: PropTypes.arrayOf(PropTypes.string),
};

Project.defaultProps = {
  contentComponents: null,
};

export default Project;
