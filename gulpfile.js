var 	gulp 		= require('gulp'),
 		connect 	= require('gulp-connect'),
		browserify 	= require('gulp-browserify2'),
		babelify 	= require('babelify'),
		watch 		= require('watchify'),
		del			= require('del'),
		sass		= require('gulp-sass'),
		mocha		= require('gulp-mocha');

// connect 
gulp.task('connect', function(){
	connect.server({
		root: 'public',
		port: 7000
	});
});

// clean-script
gulp.task('clean-script', function(){
	del(['public/dist/script/']);
});

// clean-styles
gulp.task('clean-style', function(){
	del(['public/dist/style/']);
});

// transpiling script
gulp.task('browserify', ['clean-script'], function(){
	return gulp.src('public/script/app.js')
			.pipe(browserify({
				transform : babelify,
				options : {
					debug: true
				}
			}))
			.pipe(gulp.dest('public/dist/script'));
});

// convert scss to css
gulp.task('sass', ['clean-style'], function(){
	return gulp.src('public/style/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('public/dist/style/'));
});

// watch scss
gulp.task('watch', function(){
	gulp.watch('public/script/**/**/*.js', ['browserify']);
	gulp.watch('public/style/*.scss', ['sass']);
});


gulp.task('default', ['connect', 'watch', 'browserify', 'sass'])