import React, { PureComponent } from 'react';
import icons from '../../constants/icons';
import './Icons.css';

class Icon extends PureComponent {
  render() {
    let html = icons[this.props.icon];

    if (!html) {
      console.error(new Error(`Icon does not exist: ${this.props.icon}`));
      return null;
    }

    html = html.replace('<svg', '<svg class="icon__svg"');

    let classes = 'icon';

    if (this.props.reduceWithWidth) {
      classes += ' icon--reduceWithWidth';
    }

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

    switch (this.props.size) {
      case 'LARGE':
        classes += ' icon--lg';
        break;
      case 'SMALL':
        classes += ' icon--sm';
        break;

      default:
        break;
    }

    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}

export default Icon;
