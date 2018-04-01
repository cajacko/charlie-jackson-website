// @flow

import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import Form from '../Forms/Form';
import Input from '../Forms/Input';
import env from '../../constants/env';

/**
 * Newsletter signup component. Shows an input for adding joining my email
 * newsletter
 *
 * @return {ReactElement} Markup to render
 */
class NewsletterSignup extends PureComponent<{}> {
  /**
   * When the form is submitted, redirect the user to the signup form
   *
   * @param {Object} formState The form state
   * @param {String} formState.email-newsletter The input value
   *
   * @return {Void} No return value
   */
  onSubmit(formState: { [key: string]: string }) {
    const email =
      formState['newsletter-email'] &&
      encodeURIComponent(formState['newsletter-email']);

    if (env.MAILCHIMP_SIGNUP_URL) {
      let url = env.MAILCHIMP_SIGNUP_URL;

      if (email) url += `&EMAIL=${email}`;

      window.open(url, '_blank');
    } else {
      throw new Error('Could not sign up user to the newsletter. The Mailchimp URL was not found');
    }
  }

  /**
   * Render the newsletter
   * @return {ReactElement} The markup to render
   */
  render() {
    return (
      <ContentSpotlight title="Join my newsletter">
        <Form onSubmit={this.onSubmit}>
          {({ setFormState }) => (
            <Input
              id="newsletter-email"
              name="newsletter-email"
              onChange={setFormState}
              type="email"
            />
          )}
        </Form>
      </ContentSpotlight>
    );
  }
}

export default NewsletterSignup;
