import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import equal from 'deep-equal';

function getItemProps(items, itemId) {
  if (!items[itemId]) {
    return { noItem: true };
  }

  return items[itemId];
}

function getPassedProps(props) {
  const passedProps = Object.assign({}, props);
  delete passedProps.itemId;
  delete passedProps.items;
  delete passedProps.element;
  delete passedProps.dispatch;
  return passedProps;
}

function getProps(props) {
  return {
    ...getItemProps(props.items, props.itemId),
    ...getPassedProps(props),
  };
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = getProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(getProps(nextProps));
  }

  shouldComponentUpdate(nextProps) {
    const props = getProps(nextProps);

    if (!equal(this.state, props)) {
      return true;
    }

    return false;
  }

  render() {
    const itemProps = getItemProps(this.props.items, this.props.itemId);
    const passedProps = getPassedProps(this.props);
    // If no element then infer element from mapping of content type
    const Element = this.props.element;
    return <Element {...itemProps} {...passedProps} />;
  }
}

Item.propTypes = {
  // eslint-disable-next-line
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  itemId: PropTypes.string,
};

Item.defaultProps = {
  element: null,
  itemId: null,
};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(Item);
