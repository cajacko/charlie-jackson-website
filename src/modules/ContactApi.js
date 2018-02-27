class ContactApi {
  static submit(email, message) {
    const FORMSPREE_ID = 'mywjzzgm';
    const url = `https://formspree.io/${FORMSPREE_ID}`;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Submission timed out. Maybe your internet is slow? Or maybe I fucked up somewhere.'));
      }, 10000);

      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email, message }),
      })
        .then(response => response.json())
        .then(({ success, error, ...response }) => {
          if (!success) {
            console.error('Error with form response', response);

            throw new Error(error ||
                'There was an error whilst submitting the message. Damn errors!');
          }

          resolve();
        })
        .catch((error) => {
          console.error(error);

          reject(error);
        });
    });
  }
}

export default ContactApi;
