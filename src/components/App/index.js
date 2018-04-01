// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteNav from '../SiteNav';
import './App.css';
import Hero from '../Hero';
import Services from '../Services';
import Work from '../Work';
import Testimonials from '../Testimonials';
import Skills from '../Skills';
import Contact from '../Contact';
import Modal from '../Modal';
import background from '../../assets/background.jpg';
import NewsletterSignup from '../NewsletterSignup';

type State = {
  showContactModal: boolean,
};

/**
 * The main App. Decides on the structure of the page and provides context to
 * the children
 */
class App extends Component<{}, State> {
  /**
   * Initialise the class, set the initial state and bind the methods
   *
   * @param {Object} props Props passed to the component
   *
   * @return {Void} No return value
   */
  constructor(props: {}) {
    super(props);

    this.state = { showContactModal: false };

    (this: any).showContactModal = this.showContactModal.bind(this);
    (this: any).hideContactModal = this.hideContactModal.bind(this);
  }

  /**
   * Get the child context, so we can pass functions to the children to control
   * the modal
   *
   * @return {Object} The context to return
   */
  getChildContext() {
    return {
      showContactModal: this.showContactModal,
      hideContactModal: this.hideContactModal,
    };
  }

  /**
   * Show the contact modal
   *
   * @return {Void} No return value
   */
  showContactModal() {
    if (this.state.showContactModal) return;

    this.setState({ showContactModal: true });
  }

  /**
   * Hide the contact modal
   *
   * @return {Void} No return value
   */
  hideContactModal() {
    if (!this.state.showContactModal) return;

    this.setState({ showContactModal: false });
  }

  /**
   * Render the app
   *
   * @return {ReactElement} The markup to render
   */
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url('${background}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right bottom',
          }}
        >
          <SiteNav />
          <Hero />
        </div>
        <Services />
        <Work />
        <Testimonials />
        <Skills />
        <NewsletterSignup />
        <Contact />
        <Modal>{this.state.showContactModal && <Contact fullScreen />}</Modal>
      </div>
    );
  }
}

App.childContextTypes = {
  showContactModal: PropTypes.func,
  hideContactModal: PropTypes.func,
};

export default App;
