import React, { PureComponent } from 'react';
// import './SiteNav.css';
import ContactButton from '../Buttons/ContactButton';

class Hero extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <h1>
            <span>Charlie Jackson</span> here!
          </h1>
          <h2>Freelance developer and UX designer</h2>
          <ContactButton text="Hire me" />
        </div>

        <img src="" />
      </div>
    );
  }
}

export default Hero;
