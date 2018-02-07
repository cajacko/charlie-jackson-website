import React, { PureComponent } from 'react';
import icons from './icons';

class Icon extends PureComponent {
  render() {
    let html = icons[this.props.icon];

    if (!html) {
      console.error(new Error(`Icon does not exist: ${this.props.icon}`));
      return null;
    }

    // if (className) {
    //   html = html.replace('<svg', `<svg class="${className}"`);
    // }

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

export default Icon;
