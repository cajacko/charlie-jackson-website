export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const routes = [];

      payload.entries.forEach((entry) => {
        const contentType = entry.sys.contentType.sys.id;

        if (contentType === 'routes' && entry.fields.uuid['en-GB'] === 'Routes - Live') {
          entry.fields.routes['en-GB'].forEach((route) => {
            payload.entries.forEach((entryTemp) => {
              if (entryTemp.sys.id === route.sys.id) {
                const data = {
                  route: entryTemp.fields.regex['en-GB'],
                  template: entryTemp.fields.template['en-GB'].sys.id,
                };

                if (entryTemp.fields.contentType) {
                  data.contentType = entryTemp.fields.contentType['en-GB'];
                }

                if (entryTemp.fields.entryField) {
                  data.entryField = entryTemp.fields.entryField['en-GB'];
                }

                routes.push(data);
              }
            });
          });
        }
      });


      return routes;
    }

    default:
      return state;
  }
};
