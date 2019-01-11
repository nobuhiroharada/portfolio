var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat')
 
gulp.task('js', function () {
  return gulp.src([
    'vendors/js/jquery1_12_4.min.js',
    'vendors/js/jquery.waypoints.min.js',
    'vendors/js/typeit.min.js',
    'resources/js/script.js'
  ])
  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('resources/js/'));
});