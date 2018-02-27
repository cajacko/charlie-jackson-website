// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
          <li
            key={key}
            className="horizontallist__listitem"
            style={{ width: width && `${width}%` }}
          >
            {component}
          </li>
        ))}
      </ul>
    );
  }
}

HorizontalList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  })).isRequired,
  stretch: PropTypes.bool,
};

HorizontalList.defaultProps = {
  stretch: false,
};

export default HorizontalList;
