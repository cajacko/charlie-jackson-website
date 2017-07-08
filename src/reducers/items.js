export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const items = {};

      payload.entries.forEach((entry) => {
        const id = entry.sys.id;
        items[id] = entry;
      });

      return items;
    }

    default:
      return state;
  }
};
