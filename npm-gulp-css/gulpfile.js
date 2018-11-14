const gulp = require('gulp');

// $ node_modules/.bin/gulp
gulp.task('default', () => {
	gulp
		.src([
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
		])
		.pipe(gulp.dest('dist'))
	;
});