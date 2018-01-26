
var gulp = require('gulp'),
    concatCss = require('gulp-concat-css');
 
gulp.task('combine',['sass'], function () {
  return gulp.src('./css/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('./temp'));
});