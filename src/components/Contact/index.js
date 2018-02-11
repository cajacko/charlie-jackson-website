import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import TextButton from '../Buttons/TextButton';

class Contact extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Contact" theme="DARK">
        <form>
          <div>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="text" />
          </div>
          <textarea placeholder="Message" />

          <TextButton text="Submit" />
        </form>
      </ContentSpotlight>
    );
  }
}

export default Contact;
