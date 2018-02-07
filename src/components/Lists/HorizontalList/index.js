import React, { PureComponent } from 'react';
import './HorizontalList.css';

class HorizontalList extends PureComponent {
  render() {
    if (!this.props.list || !this.props.list.length) return null;

    return (
      <ul className="horizontallist">
        {this.props.list.map(({ key, component }) => (
          <li key={key}>{component}</li>
        ))}
      </ul>
    );
  }
}

export default HorizontalList;
