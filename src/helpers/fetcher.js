import { init, failure, success } from 'actions/fetcher';

let id = 0;

export default (url, action) => (dispatch) => {
  id += 1;
  const logId = id;

  dispatch(init(url, action, logId));

  setTimeout(() => {
    dispatch(failure('TIMEOUT', url, action, logId));
  }, 10000);

  const config = {};

  config.method = 'GET';
  config.header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  config.credentials = 'same-origin';

  // Intercept all requests and route to a specific endpoint
  let requestUrl = '/data/';

  if (url) {
    requestUrl = `${requestUrl}${url}`;
  }

  return fetch(requestUrl, config)
    .then((response) => {
      if (response.status >= 400) {
        return dispatch(failure(response, url, action, logId));
      }

      return response.json().then((data) => {
        if (!data || (data && data.error)) {
          return dispatch(failure(data, url, action, logId));
        }

        return dispatch(success(data, url, action, logId));
      }).catch(e => dispatch(failure(e, url, action, logId)));
    }).catch(e => dispatch(failure(e, url, action, logId)));
};
