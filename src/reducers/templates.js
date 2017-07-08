export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const templates = {};

      payload.entries.forEach((entry) => {
        const id = entry.sys.id;

        const contentType = entry.sys.contentType.sys.id;

        if (contentType === 'pageTemplate') {
          const template = entry.fields.uuid['en-GB'];
          templates[template] = id;
        }
      });

      return templates;
    }

    default:
      return state;
  }
};
