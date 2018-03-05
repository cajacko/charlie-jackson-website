// @flow

require('dotenv').config();
const { createClient } = require('contentful');
const { writeJson } = require('fs-extra');
const { join } = require('path');
const data = require('./mediumContentfulMap.json');
const firebase = require('../firebase.json');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

firebase.hosting.redirects = firebase.hosting.redirects || [];

const contentfulIdSlug = {};

client.getEntries({ content_type: 'project' }).then((response) => {
  response.items.forEach((item) => {
    contentfulIdSlug[item.sys.id] = item.fields.slug;
  });

  Object.keys(data).forEach((key) => {
    const slug = contentfulIdSlug[key];

    if (!slug) return;

    firebase.hosting.redirects.push({
      source: `/${slug}`,
      destination: data[key].url,
      type: 301,
    });
  });

  return writeJson(join(__dirname, '../firebase.json'), firebase, {
    spaces: 2,
  });
});
