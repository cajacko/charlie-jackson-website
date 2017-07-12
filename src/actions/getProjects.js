import { createClient } from 'contentful';

const client = createClient({
  space: '1gvc9x9hfuhs',
  accessToken: 'eacffced48e4564b4183e1b557821f37e57f864ffc3ed4e914734bacbb66a9ea',
  resolveLinks: false,
});

export default function () {
  return (dispatch) => {
    client.sync({ initial: true })
      .then(response => dispatch({
        type: 'CONTENTFUL_SUCCESS',
        payload: response,
      }))
      // eslint-disable-next-line
      .catch(console.error);
  };
}
