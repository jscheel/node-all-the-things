#!/usr/bin/env node

var ls = require('npm-remote-ls').ls;

console.log('Fetching (full) flat dependency list for is-positive-integer...');
ls('is-positive-integer', 'latest', true, function(deps) {
  console.log(deps);
  console.log('\n\nYes, that\'s right... you see ' + deps.length + ' dependencies.\n');
});
