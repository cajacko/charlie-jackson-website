import React, { Component } from 'react';
import SiteNav from '../SiteNav';
import './App.css';
import Hero from '../Hero';
import Services from '../Services';
import Work from '../Work';
import Testimonials from '../Testimonials';
import Skills from '../Skills';
import Contact from '../Contact';

class App extends Component {
  render() {
    return (
      <div>
        <SiteNav />
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
