import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import TextButton from '../Buttons/TextButton';
import SocialIcons from '../SocialIcons';
import './Contact.css';

class Contact extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Contact" theme="DARK">
        <div className="contact">
          <form>
            <div>
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="text" />
            </div>
            <textarea placeholder="Message" />

            <TextButton text="Submit" />
          </form>
          <div className="contact__social">
            <SocialIcons large light />
          </div>
        </div>
      </ContentSpotlight>
    );
  }
}

export default Contact;
