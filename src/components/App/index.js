import React, { Component } from 'react';
import SiteNav from '../SiteNav';
import './App.css';
import Hero from '../Hero';

class App extends Component {
  render() {
    return (
      <div>
        <SiteNav />
        <Hero />
      </div>
    );
  }
}

export default App;
