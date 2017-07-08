import React from 'react';

const SiteHeader = () => (
  <section className="Now">
    <h2 className="Now-title">Now</h2>
    <p>I am currently a UX developer at <a href="https://charliejackson.com/readingroom/" target="_blank" rel="noopener noreferrer">Reading Room</a>, a web development agency based in London. Working a lot with React JS, Node JS, Sass and for big corporate and consumer websites.</p>
    <p>I am living in Islington, London at the moment and doing a lot of improvised comedy all around the place and with the improv comedy group <a href="https://www.facebook.com/SuperCouth" target="_blank" rel="noopener noreferrer">SuperCouth</a>.</p>
    <p>I&nbsp;do a lot of personal projects, all documented here on the site. My projects normally float around the areas of new tech startup ideas, apps, websites, art, music, improv videos, smart home technology and life hacking.</p>
    <p>I’m also married to the wonderful&nbsp;blogger, artist and social media guru&nbsp;<a href="https://vikibell.com" target="_blank" rel="noopener noreferrer">Viki Bell</a>.</p>

    <ul className="Now-imageList">
      <li className="Now-imageListItem"><img className="Now-image" alt="yay for now" src="https://charliejackson.com//content/themes/charliejackson/media/charlie-jackson-profile-picture-wedding.jpg" /></li>
      <li className="Now-imageListItem"><img className="Now-image" alt="yay for now" src="https://charliejackson.com//content/themes/charliejackson/media/charlie-jackson-profile-picture-wood-party.jpg" /></li>
      <li className="Now-imageListItem"><img className="Now-image" alt="yay for now" src="https://charliejackson.com//content/themes/charliejackson/media/charlie-jackson-profile-picture-beard.jpg" /></li>
    </ul>
  </section>
);

export default SiteHeader;
