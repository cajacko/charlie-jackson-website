const { readJsonSync, writeJsonSync } = require('fs-extra');
const { join } = require('path');

let dev = false;
let live = false;

process.argv.forEach((arg) => {
  if (arg.includes('--dev')) {
    dev = true;
  } else if (arg.includes('--live')) {
    live = true;
  }
});

if (dev && live) {
  throw new Error(
    'Cannot build for --dev and --live at the same time, pick one',
  );
} else if (!dev && !live) {
  throw new Error('Expecting --dev or --live flag');
}

const configPath = join(__dirname, '../.firebaserc');
const config = readJsonSync(configPath);

if (!config || !config.projects || typeof config.projects !== 'object') {
  throw new Error('.firebaserc must have { projects: {} }');
}

if (live) {
  config.projects.default = 'charlie-jackson-website';
} else {
  config.projects.default = 'charlie-jackson-website-dev';
}

writeJsonSync(configPath, config, { spaces: 2 });
