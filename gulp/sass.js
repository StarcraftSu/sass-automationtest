   var gulp = require('gulp'),
       sass = require('gulp-ruby-sass'),
       concat = require('gulp-concat');

       gulp.task('sass',function(){
           sass('./scss/**/*.scss')
           .on('error', sass.logError)
           .pipe(gulp.dest('./css'));
       });

       gulp.task('concat',['sass'],function(){
           gulp.src('./css/**/*.css')
           .pipe(concat('styles.css'))
           .pipe(gulp.dest('./css'));
       });

    