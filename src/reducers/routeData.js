export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const typeFields = {};

      Object.keys(payload).forEach((id) => {
        const { contentType, varContentType, varEntryField } = payload[id];

        if (contentType === 'route') {
          if (varContentType && varEntryField) {
            if (!typeFields[varContentType]) {
              typeFields[varContentType] = [];
            }

            typeFields[varContentType].push(varEntryField);
          }
        }
      });

      const routeData = {};

      Object.keys(payload).forEach((id) => {
        const item = payload[id];
        const contentType = item.contentType;

        if (typeFields[contentType]) {
          typeFields[contentType].forEach((field) => {
            if (!routeData[contentType]) {
              routeData[contentType] = {};
            }

            if (!routeData[contentType][field]) {
              routeData[contentType][field] = {};
            }

            const entryField = item[field];

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
