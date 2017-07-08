/* @flow */

import getFetcherAction from 'helpers/getFetcherAction';

export const fetcherActions = {
  INIT: 'INIT',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const callStatus = {};

export function init(url: string, action: string, id: number) {
  callStatus[id] = new Date();

  return {
    type: getFetcherAction(action, fetcherActions.INIT),
    payload: { url, fetcher: { action, id } },
  };
}

export function success(
  data: {},
  url: string,
  action: string,
  id: number,
) {
  return (dispatch: () => void) => {
    if (!callStatus[id]) {
      return false;
    }

    delete callStatus[id];

    return dispatch({
      type: getFetcherAction(action, fetcherActions.SUCCESS),
      payload: { url, data, fetcher: { action, id } },
    });
  };
}

export function failure(
  error: any,
  url: string,
  action: string,
  id: number,
) {
  return (dispatch: () => void) => {
    if (!callStatus[id]) {
      return false;
    }

    delete callStatus[id];

    return dispatch({
      type: getFetcherAction(action, fetcherActions.ERROR),
      payload: { error, url, fetcher: { action, id } },
    });
  };
}
