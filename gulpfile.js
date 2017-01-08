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

var themeRoot = './content/themes/charliejackson/';
var styleRoot = themeRoot + 'styles/';

var paths = {
  css: styleRoot + 'css/',
  sassFiles: styleRoot + 'sass/**/*.scss',
  phpFiles: themeRoot + '**/*.php'
}

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
});

gulp.task('browsersync', function() {
    browserSync.init({
        proxy: "localhost"
    });
});

gulp.task('default', ['browsersync', 'watch', 'sass']);
