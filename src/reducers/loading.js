export default (state = true, { type }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      return false;
    }

    default:
      return state;
  }
};
