import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import TextButton from '../Buttons/TextButton';
import SocialIcons from '../SocialIcons';
import './Contact.css';
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import SpacingContainer from '../Containers/SpacingContainer';
import Form from '../Forms/Form';

class Contact extends PureComponent {
  onSubmit({ name, email, message }) {
    console.warn(name, email, message);
  }

  render() {
    return (
      <ContentSpotlight title="Contact" theme="DARK">
        <div className="contact">
          <div className="contact__form">
            <Form onSubmit={this.onSubmit}>
              {({ setFormState, submit }) => (
                <div className="contact__formwrapper">
                  <div>
                    <SpacingContainer mb2>
                      <SpacingContainer mr>
                        <Input
                          placeholder="Name"
                          type="text"
                          onChange={setFormState}
                          name="name"
                        />
                      </SpacingContainer>
                      <SpacingContainer ml>
                        <Input
                          placeholder="Email"
                          type="text"
                          onChange={setFormState}
                          name="email"
                        />
                      </SpacingContainer>
                    </SpacingContainer>
                  </div>

                  <Textarea
                    placeholder="Message"
                    onChange={setFormState}
                    name="message"
                  />

                  <SpacingContainer mv2>
                    <TextButton text="Submit" theme="LIGHT" action={submit} />
                  </SpacingContainer>
                </div>
              )}
            </Form>
          </div>
          <div className="contact__social">
            <SocialIcons large light />
          </div>
        </div>
      </ContentSpotlight>
    );
  }
}

export default Contact;
