import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import './Skills.css';

class Skills extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Me and my skills" theme="LIGHT">
        <div className="skills">About</div>
      </ContentSpotlight>
    );
  }
}

export default Skills;
