var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('build', function() {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    // .on('error', function(err){
    //   console.log(err.message);
    // })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/lib/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.start('build');
  watch('./src/**/*.js', function() {
    gulp.start('build');
  });
});

gulp.task('serve', function(event) {
  connect.server({
    root: './build/',
    port: 3000,
    livereload: true
  });
  gulp.start('watch');
});

gulp.task('default', ['serve']);