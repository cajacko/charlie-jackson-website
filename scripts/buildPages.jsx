import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Handlebars from 'handlebars';
import { readFileSync, writeFile } from 'fs';
import { join, dirname } from 'path';
import { minify } from 'html-minifier';
import mkdirp from 'mkdirp';
import Main from 'entry/Main';
import manifest from 'dist/assets/scripts/manifest.json';

const file = readFileSync(join(__dirname, '../src/index.html'), 'utf8');
const template = Handlebars.compile(file);
const manifestContent = readFileSync(join(__dirname, `../dist/assets/scripts/${manifest['manifest.js']}`), 'utf8');

// eslint-disable-next-line
function renderPage(url, htmlData, reactData) {
  const page = ReactDOMServer.renderToString(<Main />);
  const originalHtml = template({
    react: page,
    manifest: manifestContent,
    js: {
      main: manifest['main.js'],
      vendor: manifest['vendor.js'],
    },
    ...htmlData,
  });
  const html = minify(originalHtml, {
    removeComments: true,
    // collapseWhitespace: true,
  });

  const path = join(__dirname, `../dist/${url}.html`);

  mkdirp(dirname(path), (err) => {
    if (err) {
      throw err;
    }

    writeFile(path, html);
  });
}

function getPages() {
  return [
    {
      url: 'index',
      htmlData: {},
      reactData: {},
    },
    {
      url: 'post-slug',
      htmlData: {},
      reactData: {},
    },
  ];
}

const pages = getPages();

pages.forEach(({ url, htmlData, reactData }) => {
  renderPage(url, htmlData, reactData);
});
