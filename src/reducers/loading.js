export default (state = true, { type }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS':
    case 'CONTENTFUL_ERROR': {
      return false;
    }

    default:
      return state;
  }
};
