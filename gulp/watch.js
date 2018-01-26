var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

    
gulp.task('watch',function(){
	notify:false,
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});

	watch("./index.html",function(){
		browserSync.reload();
	});

	watch('./scss/**/*',function(){
		gulp.start('cssInject');
	});


	// watch('./app/assets/scripts/**/*',function(){
	// 	gulp.start('jsInject');
	// })
});

gulp.task('cssInject',['concat'],function(){
	return gulp.src('./css/**/*.css')
	.pipe(browserSync.stream());
});