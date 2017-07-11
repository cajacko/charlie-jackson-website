import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = () => (
  <header className="SiteHeader">
    <Link className="SiteHeader-imageLink" to="/">
      <img
        width="150"
        height="150"
        src="https://charliejackson.com/content/uploads/2017/01/charlie-jackson-profile-pic.jpg"
        className="SiteHeader-image"
        alt="Charlie Jackson profile"
      />
    </Link>
    <div className="SiteHeader-text">
      <Link className="SiteHeader-titleLink" to="/">
        <h1 className="SiteHeader-title">Charlie Jackson</h1>
      </Link>
      <p className="SiteHeader-description">Programmer, entrepreneur, designer and improv comedian</p>
    </div>
  </header>
);

export default SiteHeader;
