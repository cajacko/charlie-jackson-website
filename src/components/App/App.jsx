import React from 'react';
import SiteHeader from 'components/SiteHeader/SiteHeader';
import Now from 'components/Now/Now';
import Social from 'components/Social/Social';
import Projects from 'components/Projects/Projects';

const App = () => (
  <div>
    <SiteHeader />
    <Now />
    <Social />
    <Projects />
  </div>
);

export default App;
