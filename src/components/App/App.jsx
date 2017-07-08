import React from 'react';
import SiteHeader from 'components/SiteHeader/SiteHeader';
import Now from 'components/Now/Now';
import Social from 'components/Social/Social';
import ProjectLoop from 'components/ProjectLoop/ProjectLoop';
import Project from 'components/Project/Project';

// const App = () => (
//   <div>
//     <SiteHeader />
//     <Now />
//     <Social />
//     <Projects />
//   </div>
// );

const App = () => (
  <div>
    <SiteHeader />
    <Social />
    <Project />
  </div>
);

export default App;
