var gulp = require('gulp'),
    postcss=require("gulp-postcss"),   
    autoprefixer = require('autoprefixer');
  
    gulp.task('combine',function(){
        gulp.src('./css/styles.css')
        .pipe(postcss[autoprefixer()])
        .on('error',function(errorMessage){
            console.log(errorMessage.toString);
            this.emit('end');
        })
        .pipe(gulp.dest('./temp/style'));
    });
