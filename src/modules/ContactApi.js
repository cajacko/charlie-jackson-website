class ContactApi {
  static submit(name, email, message) {
    const FORMSPREE_ID = 'xdgeqelm';
    const url = `https://formspree.io/${FORMSPREE_ID}`;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, userEmail: email, message }),
    })
      .then(response => response.json())
      .then(({ success, error, ...response }) => {
        if (!success) {
          console.error('Error with form response', response);

          throw new Error(
            error ||
              'There was an error with the form response, check logs for more details',
          );
        }
      })
      .catch(console.error);
  }
}

export default ContactApi;
