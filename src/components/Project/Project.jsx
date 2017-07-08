import React from 'react';

const content = {
  __html: `
    <p><img class="aligncenter wp-image-548" src="https://charliejackson.com/content/uploads/2017/05/om.png" alt="Om Mantra" width="600" height="619" srcset="https://charliejackson.com/content/uploads/2017/05/om.png 2000w, https://charliejackson.com/content/uploads/2017/05/om-291x300.png 291w, https://charliejackson.com/content/uploads/2017/05/om-768x792.png 768w, https://charliejackson.com/content/uploads/2017/05/om-600x619.png 600w" sizes="(max-width: 600px) 100vw, 600px"></p>
    <p>I have a list of mantra and sayings that I’ve collected from various books, podcasts and talks. These are thing’s that either inspire me or are principles I want to try and live by. Many of them contradict each other as well, so they are more thought provoking, than a definitive list of things I stand by. I also setup a cheeky Google Script that automatically emails a random one to me everyday, as a way to remind me of some of the thing’s I’ve though about over the years.</p>
    <ul>
      <li>Above and beyond</li>
      <li>Be mindful at everything you do</li>
      <li>Breathe better</li>
      <li>Fully embrace your senses</li>
      <li>Do, Record, Relive</li>
      <li>Automate as much as possible</li>
      <li>Be effective not just efficient</li>
      <li>Destuffocate</li>
      <li>What are the most absurb ways to solve your problems?</li>
      <li>Does this add to my short or long term happiness?</li>
      <li>Make mistakes of ambition, not mistakes of sloth</li>
      <li>You don’t have to finish everything you start</li>
      <li>Are you being productive or just active?</li>
      <li>Find the 20% of work that counts for 80%</li>
      <li>What you do is more important than how you do it</li>
      <li>Excitement is the phsyical sympton of happiness</li>
      <li>Leverage strengths rather than fix weaknesses</li>
      <li>Unreasonable and unrealistic goals are easier to achieve than normal ones.</li>
      <li>What gets measured, gets managed</li>
      <li>Act with the intention of being remarkable</li>
      <li>Measurement = motivation</li>
      <li>Beginners mind, treat everything as being new</li>
      <li>Act with the curiosity of a child</li>
      <li>Jump and justify</li>
      <li>Yes and</li>
      <li>Find the most obvious ways to solve a problem</li>
      <li>Don’t overcomplicate, everything can be easy and simple</li>
      <li>The best ideas are often psychotic, obscene and unoriginal</li>
      <li>Don’t be afraid to show your flaws</li>
      <li>Don’t postpone decision making</li>
      <li>Are you doing something important?</li>
      <li>Constantly look for things to remove</li>
      <li>Clear your mind</li>
      <li>Think inside the box</li>
      <li>Striving for originality makes your work mediocre</li>
      <li>Remove as much mental load as you can</li>
      <li>Get rid of all notifications</li>
      <li>If something takes less than 2 mins to do, do it!</li>
      <li>Focus on one thing at a time</li>
      <li>Adjust your environment to promote better motivation</li>
      <li>Focus!</li>
      <li>Ask friends and randomers opinions on the work you are doing right now</li>
      <li>Striving for perfection will prevent you from taking flight</li>
      <li>Stress derives from not being able to choose one idea over another</li>
    </ul>
  `,
};


const Project = () => (
  <article className="Project">
    <h2 className="Project-title">Mantras – A Collection of Learnings</h2>
    <div className="Project-meta">
      <p className="Project-date">Last Updated: Sat 27th May, 2017</p>
    </div>

    <div className="Project-content" dangerouslySetInnerHTML={content} />
  </article>
);

export default Project;
