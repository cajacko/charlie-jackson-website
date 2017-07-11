export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const assets = {};

      payload.assets.forEach((asset) => {
        const id = asset.sys.id;
        assets[id] = asset;
      });

      return assets;
    }

    default:
      return state;
  }
};
