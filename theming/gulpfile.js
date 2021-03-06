const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('scss', () => {
	gulp
		.src('src/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(rename('main.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/css/'))
	;
});

gulp.task('js-vendor', () => {
	gulp
		.src([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
			//'node_modules/some-other-library.js',
			//'node_modules/some-other-library.js',
			//'node_modules/some-other-library.js',
		])
		.pipe(sourcemaps.init())
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/js/'))
	;
});


gulp.task('js-main', () => {
	gulp
		.src([
			'src/js/**.js'
			// 'src/js/main.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('main.min.js'))
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('dist/js/'))
	;
});


gulp.task('watch',function() {
	gulp.watch('src/scss/**/*.scss', ['scss']);
	gulp.watch('src/js/**/*.js', ['js-main']);
});


gulp.task('default', ['scss', 'js-vendor', 'js-main', 'watch']);
gulp.task('production', ['scss', 'js-vendor', 'js-main']);