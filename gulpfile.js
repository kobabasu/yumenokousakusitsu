'use strict';
require('/usr/local/lib/node_modules/babel-core/register')({
  presets: ['es2015', 'react']
});
require('./gulp/gulpfile.es6');
