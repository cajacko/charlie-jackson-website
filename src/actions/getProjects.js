import contentful from 'constants/contentfulClient';

export default function () {
  return (dispatch) => {
    contentful.sync({ initial: true })
      .then(response => dispatch({
        type: 'CONTENTFUL_SUCCESS',
        payload: response,
      }))
      // eslint-disable-next-line
      .catch(console.error);
  };
}
