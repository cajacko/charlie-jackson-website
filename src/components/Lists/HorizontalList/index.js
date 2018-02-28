// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import './HorizontalList.css';

const HorizontalList = ({
  list,
  stretch,
}: {
  list?: Array<{
    key: string,
    component: React.Node,
  }>,
  stretch?: boolean,
}) => {
  if (!list || !list.length) return null;

  let classes = ' horizontallist';
  let width;

  if (stretch) {
    classes += ' horizontallist--stretch';
    width = Math.floor(100 / list.length);
  }

  return (
    <ul className={classes}>
      {list.map(({ key, component }) => (
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
};

HorizontalList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  })),
  stretch: PropTypes.bool,
};

HorizontalList.defaultProps = {
  stretch: false,
  list: null,
};

export default HorizontalList;
