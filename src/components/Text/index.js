import React, { PureComponent } from 'react';
import './Text.css';

class Text extends PureComponent {
  render() {
    let classes = 'text';

    switch (this.props.fontSize) {
      case 'X_LARGE':
        classes += ' text--xl';
        break;
      default:
        break;
    }

    switch (this.props.color) {
      case 'BLUE':
        classes += ' text--blue';
        break;
      default:
        break;
    }

    return <span className={classes}>{this.props.text}</span>;
  }
}

export default Text;
