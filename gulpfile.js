var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer')
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');


gulp.task('build', function() {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify({ mangle: false}))
    .pipe(gulp.dest('./lib/'))
    .pipe(connect.reload());
});

gulp.task('build-dev', function() {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./lib/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.start('build-dev');
  watch('./src/**/*.js', function() {
    gulp.start('build-dev');
  });
});

gulp.task('serve', function(event) {
  connect.server({
    root: '.',
    port: 3000,
    livereload: true
  });
  gulp.start('watch');
});

gulp.task('default', ['serve']);