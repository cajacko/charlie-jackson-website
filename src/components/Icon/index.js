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

    let classes = 'icon';

    switch (this.props.color) {
      case 'ORANGE':
        classes += ' icon--orange';
        break;
      case 'BLUE':
        classes += ' icon--blue';
        break;
      default:
        classes += ' icon--darkgrey';
        break;
    }

    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}

export default Icon;
