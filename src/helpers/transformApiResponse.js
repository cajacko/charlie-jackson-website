function getPropertValue(originalObject, property) {
  if (typeof originalObject !== 'object') {
    // eslint-disable-next-line
    console.warn(originalObject);
    throw new Error('Unexpected response', originalObject);
  }

  const props = property.split('.');

  let currentProp = Object.assign({}, originalObject);

  props.forEach((prop) => {
    if (currentProp[prop] === undefined) {
      // eslint-disable-next-line
      console.warn(currentProp, prop);
      throw new Error('Unexpected response');
    }

    currentProp = currentProp[prop];
  });

  return currentProp;
}

function addUniqueProperty(source, sourceProp, result, resultProp) {
  if (result[resultProp] !== undefined) {
    // eslint-disable-next-line
    console.warn(result[resultProp], result, resultProp);
    throw new Error('Unexpected response, prop already exists', result, resultProp);
  }

  const sourceValue = getPropertValue(source, sourceProp);
  const response = Object.assign({}, result);
  response[resultProp] = sourceValue;
  return response;
}

function mergeFields(item, currentObject, asset) {
  const itemObject = Object.assign({}, currentObject);
  const fields = getPropertValue(item, 'fields');

  Object.keys(fields).forEach((field) => {
    let value = getPropertValue(fields[field], 'en-GB');

    if (!asset) {
      if (Array.isArray(value)) {
        const newArray = [];

        value.forEach((arrayItem) => {
          newArray.push(getPropertValue(arrayItem, 'sys.id'));
        });

        value = newArray;
      } else if (typeof value === 'object') {
        value = getPropertValue(value, 'sys.id');
      }
    }

    if (itemObject[field] !== undefined) {
      // eslint-disable-next-line
      console.warn(itemObject, field, value);
      throw new Error('Unexpected response, prop already exists');
    }

    itemObject[field] = value;
  });

  return itemObject;
}

export default function (response) {
  const items = {};
  const entries = getPropertValue(response, 'entries');
  const assets = getPropertValue(response, 'assets');

  if (!Array.isArray(entries)) {
    // eslint-disable-next-line
    console.warn(entries);
    throw new Error('Unexpected response');
  }

  entries.forEach((item) => {
    const id = getPropertValue(item, 'sys.id');
    let itemObject = { id };
    itemObject = addUniqueProperty(item, 'sys.createdAt', itemObject, 'createdAt');
    itemObject = addUniqueProperty(item, 'sys.updatedAt', itemObject, 'updatedAt');
    itemObject = addUniqueProperty(item, 'sys.contentType.sys.id', itemObject, 'contentType');
    itemObject = mergeFields(item, itemObject);
    items[id] = itemObject;
  });

  if (!Array.isArray(assets)) {
    // eslint-disable-next-line
    console.warn(assets);
    throw new Error('Unexpected response', response);
  }

  assets.forEach((item) => {
    const id = getPropertValue(item, 'sys.id');
    let itemObject = { id };
    itemObject = addUniqueProperty(item, 'sys.createdAt', itemObject, 'createdAt');
    itemObject = addUniqueProperty(item, 'sys.updatedAt', itemObject, 'updatedAt');
    itemObject = addUniqueProperty(item, 'fields.file.en-GB.contentType', itemObject, 'contentType');
    itemObject = mergeFields(item, itemObject, true);
    items[id] = itemObject;
  });

  return items;
}
