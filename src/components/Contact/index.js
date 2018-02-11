import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import TextButton from '../Buttons/TextButton';
import SocialIcons from '../SocialIcons';
import './Contact.css';
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import SpacingContainer from '../Containers/SpacingContainer';

class Contact extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Contact" theme="DARK">
        <div className="contact">
          <form className="contact__form">
            <div>
              <SpacingContainer mb2>
                <SpacingContainer mr>
                  <Input placeholder="Name" type="text" />
                </SpacingContainer>
                <SpacingContainer ml>
                  <Input placeholder="Email" type="text" />
                </SpacingContainer>
              </SpacingContainer>
            </div>
            <Textarea placeholder="Message" />

            <SpacingContainer mv2>
              <TextButton text="Submit" theme="LIGHT" />
            </SpacingContainer>
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
