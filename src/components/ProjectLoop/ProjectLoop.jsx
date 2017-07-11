import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import ProjectLoopItem from 'components/ProjectLoopItem/ProjectLoopItem';

const ProjectLoop = ({ title, projects }) => (
  <div className="Projects">
    <h2 className="Projects-title">{title}</h2>
    <main id="Projects-loop" className="Projects-loop">
      {
        projects.map(id => (
          <Item key={id} itemId={id} element={ProjectLoopItem} />
        ))
      }
    </main>

    <nav className="navigation pagination" role="navigation" style={{ display: 'none' }}>
      <h2 className="screen-reader-text">Posts navigation</h2>
      <div className="nav-links">
        <span className="page-numbers current">1</span>
        <a className="page-numbers" href="https://charliejackson.com/page/2/">2</a>
        <span className="page-numbers dots">…</span>
        <a className="page-numbers" href="https://charliejackson.com/page/6/">6</a>
        <a className="next page-numbers" href="https://charliejackson.com/page/2/">
          <span id="Projects-next">Next Page</span>
        </a>
      </div>
    </nav>
  </div>
);

ProjectLoop.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectLoop;
