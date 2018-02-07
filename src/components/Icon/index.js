import React, { PureComponent } from 'react';
import icons from './icons';
import './Icons.css';

class Icon extends PureComponent {
  render() {
    let html = icons[this.props.icon];

    if (!html) {
      console.error(new Error(`Icon does not exist: ${this.props.icon}`));
      return null;
    }

    html = html.replace('<svg', `<svg class="icon__svg"`);

    return (
      <div
        className="icon icon--black"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

export default Icon;
