import React from 'react';

const SiteHeader = () => (
  <header className="SiteHeader">
    <a className="SiteHeader-imageLink" href="/">
      <img
        width="150"
        height="150"
        src="https://charliejackson.com/content/uploads/2017/01/charlie-jackson-profile-pic.jpg"
        className="SiteHeader-image"
        alt="Charlie Jackson profile"
      />
    </a>
    <div className="SiteHeader-text">
      <a className="SiteHeader-titleLink" href="/">
        <h1 className="SiteHeader-title">Charlie Jackson</h1>
      </a>
      <p className="SiteHeader-description">Programmer, entrepreneur, designer and improv comedian</p>
    </div>
  </header>
);

export default SiteHeader;
