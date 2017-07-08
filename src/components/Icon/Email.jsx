import React from 'react';

const svg = {
  __html: `
  <svg class="Social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
    <path class="Social-emailPath--blue" d="M0 788l0-576q0-1 3-19l339 290-338 325q-4-14-4-20zm45-635q7-3 17-3l913 0q9 0 18 3l-340 291-45 36-89 73-89-73-45-36zm1 694l341-327 132 107 132-107 341 327q-8 3-17 3l-913 0q-8 0-16-3zm650-364l338-290q3 9 3 19l0 576q0 9-3 20z"></path>
  </svg>
  `,
};

const Instagram = () => (
  <div dangerouslySetInnerHTML={svg} />
);

export default Instagram;
