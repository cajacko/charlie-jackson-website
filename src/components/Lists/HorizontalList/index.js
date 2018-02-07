import React, { PureComponent } from 'react';
import './HorizontalList.css';

class HorizontalList extends PureComponent {
  render() {
    if (!this.props.list || !this.props.list.length) return null;

    let classes = ' horizontallist';

    if (this.props.stretch) classes += ' horizontallist--stretch';

    return (
      <ul className={classes}>
        {this.props.list.map(({ key, component }) => (
          <li key={key} className="horizontallist__listitem">
            {component}
          </li>
        ))}
      </ul>
    );
  }
}

export default HorizontalList;
