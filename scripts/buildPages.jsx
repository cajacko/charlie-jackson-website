import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Handlebars from 'handlebars';
import { readFileSync, writeFile } from 'fs';
import { join, dirname } from 'path';
import { minify } from 'html-minifier';
import mkdirp from 'mkdirp';
import Main from 'entry/Main';

const file = readFileSync(join(__dirname, '../src/index.html'), 'utf8');
const template = Handlebars.compile(file);

// eslint-disable-next-line
function renderPage(url, htmlData, reactData) {
  const page = ReactDOMServer.renderToString(<Main />);
  const originalHtml = template({ react: page, ...htmlData });
  const html = minify(originalHtml, {
    removeComments: true,
    collapseWhitespace: true,
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
      url: 'post-slug',
      htmlData: {},
      reactData: {},
    },
    {
      url: 'dooby-doo/Wee',
      htmlData: {},
      reactData: {},
    },
  ];
}

const pages = getPages();

pages.forEach(({ url, htmlData, reactData }) => {
  renderPage(url, htmlData, reactData);
});
