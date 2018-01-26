   var gulp = require('gulp'),
    //    sass = require('gulp-ruby-sass');
       sass = require('gulp-sass'),
       autoprefixer = require('gulp-autoprefixer');
       


       gulp.task('sass',function(){
           console.log('transform scss file to css file');
           return gulp.src('./scss/**/*.scss')
           .pipe(sass().on('error', sass.logError))
           .pipe(autoprefixer())
           .pipe(gulp.dest('./css'));
       });



    