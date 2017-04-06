var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var bundle = require('gulp-bundle-assets');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');



gulp.task('scripts', function() {
	gulp.src('./public/js/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/all.js'))
});


gulp.task('default', function () {
	var processors = [
		autoprefixer,
		cssnano
	];
	return gulp.src('./public/css/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./public/css/'));
});
