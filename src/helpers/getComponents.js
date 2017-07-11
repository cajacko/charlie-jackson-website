export default function (fields) {
  if (!fields) {
    // eslint-disable-next-line
    console.warn('Hardcoded 404, no fields, should never get here!');
    return null;
  }

  if (!fields.components) {
    // eslint-disable-next-line
    console.warn('Hardcoded 404, no fields.components, should never get here!');
    return null;
  }

  if (!fields.components['en-GB']) {
    // eslint-disable-next-line
    console.warn('Hardcoded 404, no fields.components[\'en-GB\'], should never get here!');
    return null;
  }

  return fields.components['en-GB'];
}
