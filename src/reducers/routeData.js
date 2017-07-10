export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const typeFields = {};

      payload.entries.forEach((entry) => {
        const contentType = entry.sys.contentType.sys.id;

        if (contentType === 'route') {
          if (entry.fields.contentType && entry.fields.entryField) {
            const routeDataContentType = entry.fields.contentType['en-GB'];

            if (!typeFields[routeDataContentType]) {
              typeFields[routeDataContentType] = [];
            }

            typeFields[routeDataContentType].push(entry.fields.entryField['en-GB']);
          }
        }
      });

      const routeData = {};

      payload.entries.forEach((entry) => {
        const id = entry.sys.id;
        const contentType = entry.sys.contentType.sys.id;

        if (typeFields[contentType]) {
          typeFields[contentType].forEach((field) => {
            if (!routeData[contentType]) {
              routeData[contentType] = {};
            }

            if (!routeData[contentType][field]) {
              routeData[contentType][field] = {};
            }

            const entryField = entry.fields[field]['en-GB'];

            routeData[contentType][field][entryField] = id;
          });
        }
      });

      return routeData;
    }

    default:
      return state;
  }
};
