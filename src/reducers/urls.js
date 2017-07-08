export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const urls = {};

      payload.entries.forEach((entry) => {
        const id = entry.sys.id;
        const contentType = entry.sys.contentType.sys.id;

        if (contentType === 'project') {
          const url = entry.fields.slug['en-GB'];
          urls[url] = { projectId: id };
        }
      });

      return urls;
    }

    default:
      return state;
  }
};
