// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AssetPreload from './modules/AssetPreload';

AssetPreload.preload();

const root = document.getElementById('root');

if (root === null) {
  throw new Error('#root does not exist on the page, could not load react');
} else {
  ReactDOM.render(<App />, root);
}
