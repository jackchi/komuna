var gulp   = require('gulp'), 
	browserSync = require('browser-sync');


gulp.task('serve', function() {
	browserSync.init(['css/*.cs', 'js/*.js'], {
		server: {
			baseDir: './public'
		},
		port: process.env.PORT || 3000,
    	open: false
	});
	gulp.watch(['public/css/*', 'public/*.html'], browserSync.reload);
});

gulp.task('default', ['serve']) 