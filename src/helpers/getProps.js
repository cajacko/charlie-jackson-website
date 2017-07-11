export function getItemProps(items, itemId) {
  if (!items[itemId]) {
    return { noItem: true };
  }

  return items[itemId];
}

export function getPassedProps(props) {
  const passedProps = Object.assign({}, props);
  delete passedProps.itemId;
  delete passedProps.items;
  delete passedProps.element;
  delete passedProps.dispatch;
  return passedProps;
}

export function getProps(props) {
  return {
    ...getItemProps(props.items, props.itemId),
    ...getPassedProps(props),
  };
}
