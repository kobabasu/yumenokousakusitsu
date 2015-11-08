'use strict';

import gulp  from 'gulp';
import shell from '/usr/local/lib/node_modules/gulp-shell';
import seq   from 'run-sequence';

const path = {
  api:  './api',
  src:  './src',
  js:   './js',
  dist: './dist',
  sass: './sass',
  css:  './css',
  test: './test',
  e2e: './e2e'
}

gulp.task('babel', shell.task([`
  babel ${path.src} --out-dir ${path.js} --presets react
`]));

gulp.task('browserify', shell.task([`
  browserify ${path.js}/App.js -o ${path.dist}/build.js -v -t [ babelify --presets [ es2015 react ] ]
`]));

gulp.task('watchify', shell.task([`
  watchify ${path.js}/App.js -o ${path.dist}/build.js -v -t [ babelify --presets [ es2015 react ] ]
`]));

gulp.task('frisby', shell.task([`
  babel ${path.test}/src --out-dir ${path.test}/spec --presets es2015;
  jasmine-node ${path.api}/spec/js
`]));

gulp.task('sass', shell.task([`
  sassc -M ${path.sass}/style.sass > ${path.css}/style.css -m ${path.css}/style.css
`]));

gulp.task('sass:min', shell.task([`
  sassc -t compressed -M ${path.sass}/style.sass > ${path.css}/style.min.css -m ${path.css}/style.min.css
`]));

gulp.task('docs:sass', shell.task([`
  styledocco -n 'css reference' -o ${path.docs}/sass --preprocessor 'sass' ${path.sass}/*.sass ${path.sass}/*.scss ${path.sass}/**/*.sass
`]));

gulp.task('docs:pages', shell.task([`
  styledocco -n 'css reference' -o ${path.docs}/sass --preprocessor 'sass' ${path.sass}/pages/*.sass ${path.sass}/pages/**/*.sass
`]));

gulp.task('docs:layouts', shell.task([`
  styledocco -n 'css reference' -o ${path.docs}/sass --preprocessor 'sass' ${path.sass}/layouts/*.sass ${path.sass}/layouts/**/*.sass
`]));

gulp.task('karma', shell.task([`
  babel ${path.test}/src --out-dir ${path.test}/spec --presets es2015;
  browserify -v ${path.test}/spec/*.js -o ${path.test}/dist/build.js;
  karma start ${path.test}/karma.conf.js
`]));

gulp.task('e2e', shell.task([`
  protractor ${path.e2e}/protractor.conf.js
`]));

gulp.task('watch:src', () => {
  gulp
    .watch([`${path.src}/**/*.*`], ['src'])
    .on('error', err => process.exit(1));
});

gulp.task('watch:sass', ['sass'], () => {
  gulp
    .watch([`${path.sass}/**/*.*`], ['sass'])
    .on('error', err => process.exit(1));
});

gulp.task('src', done => seq('babel', 'browserify', done));

gulp.task('watch', ['watch:src']);

gulp.task('test', done => seq('karma', done));

gulp.task('docs', done => seq('docs:sass', 'docs:pages', 'docs:layouts', done));

gulp.task('build', done => seq('src', 'sass:min', 'docs', done));
