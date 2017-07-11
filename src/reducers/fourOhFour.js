export default (state = null, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      let id = state;

      payload.entries.forEach((entry) => {
        const contentType = entry.sys.contentType.sys.id;

        if (contentType === 'pageTemplate' && entry.fields.uuid['en-GB'] === '404') {
          id = entry.sys.id;
        }
      });

      return id;
    }

    default:
      return state;
  }
};
