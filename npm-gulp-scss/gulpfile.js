const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// $ node_modules/.bin/gulp scss
gulp.task('scss', () => {
	gulp
		.src('main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(rename('main.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/'))
	;
});

// $ node_modules/.bin/gulp js
gulp.task('js', () => {
	gulp
		.src([
			'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map',
		])
		.pipe(gulp.dest('dist/'))
	;
});

gulp.task('default', ['scss', 'js']);