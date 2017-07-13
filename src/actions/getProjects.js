import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';

export default function () {
  return (dispatch) => {
    contentful.sync({ initial: true })
      .then((response) => {
        let success = true;
        let payload;

        try {
          payload = transform(response);
        } catch (err) {
          // eslint-disable-next-line
          console.warn(err);
          success = false;
        }

        if (success) {
          dispatch({
            type: 'CONTENTFUL_SUCCESS',
            payload,
          });
        } else {
          dispatch({
            type: 'CONTENTFUL_ERROR',
          });
        }
      })
      // eslint-disable-next-line
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);

        dispatch({
          type: 'CONTENTFUL_ERROR',
          payload: err,
        });
      });
  };
}
