var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css');
 
gulp.task('js', function () {
  return gulp.src([
    'vendors/js/jquery1_12_4.min.js',
    'vendors/js/jquery.waypoints.min.js',
    'vendors/js/typeit.min.js',
    'resources/js/script.js'
  ])
  .pipe(plumber())
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('resources/js/'));
});

gulp.task('css', function() {
  // return gulp.src([
  //       'vendors/css/*.css',
  //       'vendors/css/grid.css',
  //       'vendors/css/animate.css',
  //   ])
    return gulp.src('vendors/css/*.css')
  .pipe(concat('bundle.css'))
  .pipe(cssClean())
  .pipe(gulp.dest('resources/css/'));
});