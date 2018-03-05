// @flow

require('dotenv').config();
const { createClient } = require('contentful');
const { writeJson } = require('fs-extra');
const data = require('./mediumContentfulMap.json');
const firebase = require('../firebase.json');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const baseRewrites = [
  {
    source: '/',
    destination: '/index.html',
  },
  {
    source: '**',
    destination: '/404.html',
  },
];

firebase.hosting.rewrites = baseRewrites;

const contentfulIdSlug = {};

client.getEntries({ content_type: 'project' }).then((response) => {
  response.items.forEach((item) => {
    contentfulIdSlug[item.sys.id] = item.fields.slug;
  });

  console.log(contentfulIdSlug);

  Object.keys(data).forEach((key) => {
    const slug = contentfulIdSlug[key];

    if (!slug) return;

    firebase.hosting.rewrites.push({
      source: `/${slug}`,
      destination: data[key].url,
      type: 301,
    });
  });

  return writeJson('../firebase.json', firebase);
});
