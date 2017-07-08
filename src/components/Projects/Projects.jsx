import React from 'react';
import Project from 'components/Project/Project';

const projects = [
  {
    image: '',
    url: '',
    title: '',
    lastUpdated: '',
    excerpt: '',
  },
  {
    image: '',
    url: 'dt',
    title: '',
    lastUpdated: '',
    excerpt: '',
  },
  {
    image: '',
    url: 'rty',
    title: '',
    lastUpdated: '',
    excerpt: '',
  },
  {
    image: '',
    url: 'rhgtyy',
    title: '',
    lastUpdated: '',
    excerpt: '',
  },
];

const Projects = () => (
  <div className="Projects">
    <h2 className="Projects-title">Projects</h2>
    <main id="Projects-loop" className="Projects-loop">
      {
        projects.map(({ image, url, title, lastUpdated, excerpt }) => (
          <Project
            key={url}
            image={image}
            url={url}
            title={title}
            lastUpdated={lastUpdated}
            excerpt={excerpt}
          />
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

export default Projects;
