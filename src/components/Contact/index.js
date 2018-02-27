// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContentSpotlight from '../ContentSpotlight';
import TextButton from '../Buttons/TextButton';
import SocialIcons from '../SocialIcons';
import './Contact.css';
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import SpacingContainer from '../Containers/SpacingContainer';
import Form from '../Forms/Form';
import ContactApi from '../../modules/ContactApi';
import Loading from '../Loading';
import Button from '../Buttons/Button';
import Text from '../Text';

let id = 0;

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    id += 1;
    this.emailId = `contact__emailid--${id}`;
    this.messageId = `contact__messageid--${id}`;

    this.state = { state: 'INIT', message: null, fetchId: 0 };

    this.onSubmit = this.onSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  onSubmit({ email, message }) {
    const fetchId = this.state.fetchId + 1;

    this.setState({ state: 'REQUESTED', fetchId, message: null });

    Promise.all([
      ContactApi.submit(email, message),
      new Promise(resolve => setTimeout(resolve, 1000)),
    ])
      .then(() => {
        if (fetchId !== this.state.fetchId) return;

        this.setState({
          state: 'SUCCESS',
          message:
            "Successfully submitted your message. I'll get back to you soon :)",
        });
      })
      .catch((e) => {
        if (fetchId !== this.state.fetchId) return;

        let errorMessage =
          (e && e.message) ||
          'Could not submit your message, please try again or email me at contact@charliejackson.com';

        errorMessage = `${errorMessage} Email me instead at contact@charliejackson.com`;

        this.setState({
          state: 'FAILED',
          message: errorMessage,
        });
      });
  }

  cancel() {
    const fetchId = this.state.fetchId + 1;

    this.setState({ state: 'INIT', message: null, fetchId });
  }

  render() {
    return (
      <ContentSpotlight
        title="Contact"
        theme="DARK"
        noBackground={this.props.fullScreen}
      >
        <div className="contact">
          <div className="contact__form">
            <Form onSubmit={this.onSubmit}>
              {({ setFormState, submit }) => (
                <div className="contact__formwrapper">
                  <SpacingContainer mb2>
                    <Input
                      placeholder="Email"
                      type="text"
                      onChange={setFormState}
                      name="email"
                      id={this.emailId}
                    />
                  </SpacingContainer>

                  <Textarea
                    placeholder="Message"
                    onChange={setFormState}
                    name="message"
                    id={this.messageId}
                  />

                  <SpacingContainer mv2>
                    <div className="contact__footer">
                      <div className="contact__footerwrapper">
                        <TextButton
                          text={
                            this.state.state === 'REQUESTED'
                              ? 'Submitting'
                              : 'Submit'
                          }
                          theme="LIGHT"
                          action={submit}
                          disabled={this.state.state === 'REQUESTED'}
                        />
                        {this.state.state === 'REQUESTED' && (
                          <div className="contact__status">
                            <div className="contact__loading">
                              <Loading theme="DARK" />
                            </div>
                            <div className="contact__cancel">
                              <Button action={this.cancel}>
                                <Text text="Cancel" color="WHITE" underline />
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {this.state.message && (
                      <div className="contact__message">
                        {this.state.state === 'FAILED' ? (
                          <div className="contact__messagetext contact__messagetext--failed">
                            <Text text={this.state.message} />
                          </div>
                        ) : (
                          <div className="contact__messagetext">
                            <Text text={this.state.message} />
                          </div>
                        )}
                      </div>
                    )}
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

Contact.propTypes = {
  fullScreen: PropTypes.bool,
};

Contact.defaultProps = {
  fullScreen: false,
};

export default Contact;
