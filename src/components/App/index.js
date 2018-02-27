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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showContactModal: false };

    this.showContactModal = this.showContactModal.bind(this);
    this.hideContactModal = this.hideContactModal.bind(this);
  }

  getChildContext() {
    return {
      showContactModal: this.showContactModal,
      hideContactModal: this.hideContactModal,
    };
  }

  showContactModal() {
    if (this.state.showContactModal) return;

    this.setState({ showContactModal: true });
  }

  hideContactModal() {
    if (!this.state.showContactModal) return;

    this.setState({ showContactModal: false });
  }

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
