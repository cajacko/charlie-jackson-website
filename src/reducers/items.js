export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      return payload;
    }

    default:
      return state;
  }
};
