/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { join } from 'path';
import parseWordpressXml from './parseWordpressXml';
import saveAsset from './saveAsset';

const xml = readFileSync(join(__dirname, 'data-2017-07-13.xml'), 'utf8');

function saveAssetLoop(items, i) {
  const item = items[i];

  if (!item) {
    return;
  }

  if (item.contentType === 'asset' && (item.extension === 'png' || item.extension === 'jpg')) {
    saveAsset(item)
      .then(() => {
        saveAssetLoop(items, i + 1);
      })
      .catch(console.error);
  } else {
    saveAssetLoop(items, i + 1);
  }
}

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const items = parseWordpressXml(result);
  const itemLoop = [];

  Object.keys(items).forEach((id) => {
    itemLoop.push(items[id]);
  });

  saveAssetLoop(itemLoop, 0);
});
