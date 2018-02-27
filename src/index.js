// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AssetPreload from './modules/AssetPreload';

AssetPreload.preload();

ReactDOM.render(<App />, document.getElementById('root'));
