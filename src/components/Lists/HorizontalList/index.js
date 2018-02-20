import React, { PureComponent } from 'react';
import './HorizontalList.css';

class HorizontalList extends PureComponent {
  render() {
    if (!this.props.list || !this.props.list.length) return null;

    let classes = ' horizontallist';
    let width;

    if (this.props.stretch) {
      classes += ' horizontallist--stretch';
      width = Math.floor(100 / this.props.list.length);
    }

    return (
      <ul className={classes}>
        {this.props.list.map(({ key, component }) => (
          <li key={key} className="horizontallist__listitem" style={{ width: width && `${width}%`}}>
            {component}
          </li>
        ))}
      </ul>
    );
  }
}

export default HorizontalList;
