import React from 'react';

const Project = () => (
  <article className="ProjectLoopItem">
    <a className="ProjectLoopItem-imageLink" href="/mantra/">
      <img width="150" height="150" src="https://charliejackson.com/content/uploads/2017/05/om-150x150.png" className="ProjectLoopItem-image wp-post-image" alt="Om Mantra" />
    </a>

    <div className="ProjectLoopItem-text">
      <a className="ProjectLoopItem-titleLink" href="/mantra/">
        <h3 className="ProjectLoopItem-title">Mantras – A Collection of Learnings</h3>
      </a>

      <div className="ProjectLoopItem-meta">
        <p className="ProjectLoopItem-date">Last Updated: Sat 27th May, 2017</p>
      </div>

      <div className="ProjectLoopItem-content">
        <p>I have a list of mantra and sayings that I’ve collected from various books, podcasts and talks. These are thing’s that either inspire me or are principles I want to try and live by. Many of them contradict each other as well, so they are more thought provoking, than a definitive list of things I […]</p>
      </div>

      <a className="ProjectLoopItem-readMore" href="/mantra/">Read More</a>
    </div>
  </article>
);

export default Project;
