import React, { Component } from 'react';
import SiteNav from '../SiteNav';
import './App.css';
import Hero from '../Hero';
import Services from '../Services';

class App extends Component {
  render() {
    return (
      <div>
        <SiteNav />
        <Hero />
        <Services />
      </div>
    );
  }
}

export default App;
