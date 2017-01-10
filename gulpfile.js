'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var moduleImporter = require('sass-module-importer');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var env = require('node-env-file');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

env(__dirname + '/.env');

var themeRoot = './content/themes/charliejackson/';
var styleRoot = themeRoot + 'styles/';
var jsRoot = themeRoot + 'javascripts/';

var paths = {
  css: styleRoot + 'css/',
  sassFiles: styleRoot + 'sass/**/*.scss',
  phpFiles: themeRoot + '**/*.php',
  jsImport: jsRoot + 'src/index.js',
  jsFiles: jsRoot + 'src/**/*.js',
  jsDist: jsRoot + 'dist/'
}

gulp.task('scripts', function() {
  return browserify(paths.jsImport)
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('script.js')) //Pass desired output filename to vinyl-source-stream
    .pipe(gulp.dest(paths.jsDist)) // Output the file
    .pipe(buffer()) // convert from streaming to buffered vinyl file object
    .pipe(rename('script.min.js')) // Rename the minified version
    .pipe(uglify()) // Minify the file
    .pipe(gulp.dest(paths.jsDist)); // Output the minified file
});

gulp.task('sass', function () {
  return gulp
    .src(paths.sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({importer: moduleImporter()}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  watch(paths.sassFiles, batch(function (events, done) {
    gulp.start('sass', done);
  }));

  watch(paths.phpFiles, batch(function (events, done) {
    browserSync.reload();
    done();
  }));

  watch(paths.jsFiles, batch(function (events, done) {
    gulp.start('scripts', function() {
      browserSync.reload();
      done();
    });
  }));
});

gulp.task('browsersync', function() {
    browserSync.init({
        proxy: process.env.LOCALHOST
    });
});

gulp.task('default', ['browsersync', 'watch', 'sass', 'scripts']);
