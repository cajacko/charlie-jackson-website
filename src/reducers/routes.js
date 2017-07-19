export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const stateRoutes = [];

      Object.keys(payload.items).forEach((id) => {
        const { contentType, uuid, routes } = payload.items[id];

        if (contentType === 'routes' && uuid === 'Routes - Live') {
          routes.forEach((routeId) => {
            const route = payload.items[routeId];

            const data = {
              route: route.regex,
              template: route.template,
            };

            if (route.varContentType) {
              data.contentType = route.varContentType;
            }

            if (route.varEntryField) {
              data.entryField = route.varEntryField;
            }

            stateRoutes.push(data);
          });
        }
      });

      if (stateRoutes.length === 0) {
        return state;
      }

      return stateRoutes;
    }

    default:
      return state;
  }
};
