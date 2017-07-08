import React from 'react';
import Project from 'components/Project/Project';

const projects = [
  {
    image: 'https://charliejackson.com/content/uploads/2017/05/om-150x150.png',
    imageAlt: 'Om Mantra',
    url: '',
    title: 'Mantras – A Collection of Learnings',
    lastUpdated: 'Sat 27th May, 2017',
    excerpt: 'I have a list of mantra and sayings that I’ve collected from various books, podcasts and talks. These are thing’s that either inspire me or are principles I want to try and live by. Many of them contradict each other as well, so they are more thought provoking, than a definitive list of things I […]',
  },
  {
    image: 'https://charliejackson.com/content/uploads/2017/05/om-150x150.png',
    imageAlt: 'Om Mantra',
    url: 'dt',
    title: 'Mantras – A Collection of Learnings',
    lastUpdated: 'Sat 27th May, 2017',
    excerpt: 'I have a list of mantra and sayings that I’ve collected from various books, podcasts and talks. These are thing’s that either inspire me or are principles I want to try and live by. Many of them contradict each other as well, so they are more thought provoking, than a definitive list of things I […]',
  },
  {
    image: 'https://charliejackson.com/content/uploads/2017/05/om-150x150.png',
    imageAlt: 'Om Mantra',
    url: 'rty',
    title: 'Mantras – A Collection of Learnings',
    lastUpdated: 'Sat 27th May, 2017',
    excerpt: 'I have a list of mantra and sayings that I’ve collected from various books, podcasts and talks. These are thing’s that either inspire me or are principles I want to try and live by. Many of them contradict each other as well, so they are more thought provoking, than a definitive list of things I […]',
  },
  {
    image: 'https://charliejackson.com/content/uploads/2017/05/om-150x150.png',
    imageAlt: 'Om Mantra',
    url: 'rhgtyy',
    title: 'Mantras – A Collection of Learnings',
    lastUpdated: 'Sat 27th May, 2017',
    excerpt: 'I have a list of mantra and sayings that I’ve collected from various books, podcasts and talks. These are thing’s that either inspire me or are principles I want to try and live by. Many of them contradict each other as well, so they are more thought provoking, than a definitive list of things I […]',
  },
];

const ProjectLoop = () => (
  <div className="Projects">
    <h2 className="Projects-title">Projects</h2>
    <main id="Projects-loop" className="Projects-loop">
      {
        projects.map(({
          image,
          url,
          title,
          lastUpdated,
          excerpt,
          imageAlt,
        }) => (
          <Project
            key={url}
            image={image}
            url={url}
            title={title}
            lastUpdated={lastUpdated}
            excerpt={excerpt}
            imageAlt={imageAlt}
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

export default ProjectLoop;
