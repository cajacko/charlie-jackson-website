import React from 'react';

const svg = {
  __html: `
  <svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
      <path class="Social-youtTube--red" fill-rule="evenodd" clip-rule="evenodd" d="M12.263,135.272c8.178-20.843,22.264-31.261,43.158-40.321   C75.868,85.891,165.815,80.452,256.216,80c90.416,0.452,179.907,5.891,200.348,14.951c20.91,9.06,34.98,19.478,43.165,40.321   C507.899,155.655,512,205.94,512,256.234c0,50.27-4.101,100.104-12.271,120.501c-8.185,20.836-22.255,31.246-43.165,40.767   c-20.44,9.067-109.932,14.046-200.348,14.498c-90.401-0.452-180.348-5.431-200.795-14.498   c-20.894-9.521-34.98-19.931-43.158-40.767C4.085,356.338,0,306.504,0,256.234C0,205.94,4.085,155.655,12.263,135.272   L12.263,135.272z"></path>
      <polygon class="Social-youtTube--white" clip-rule="evenodd" fill-rule="evenodd" points="192.164,144.332 192.164,351.812 368.888,256.234  "></polygon>
      <polygon class="Social-youtTube--grey" clip-rule="evenodd" fill-rule="evenodd" points="192.164,160.188 368.888,256.234 192.164,144.332  "></polygon>
    </g>
  </svg>
  `,
};

const Instagram = () => (
  <div dangerouslySetInnerHTML={svg} />
);

export default Instagram;
