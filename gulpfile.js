const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');

var allScripts = ['./*.js', './public/js/**/*.js'];

gulp.task('lint', () => {
  return gulp.src(allScripts)
  .pipe(eslint({}))
  .pipe(eslint.format());
});

gulp.task('lint:watch', () => {
  return gulp.watch(allScripts, ['lint']);
});

var sassDir = ['./public/sass/**/*.scss'];
var cssDir = './public/css';

gulp.task('sass', () => {
  return gulp.src(sassDir)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(cssDir));
});

gulp.task('sass:watch', () => {
  return gulp.watch(sassDir, ['sass']);
});

gulp.task('lint-sass', ['lint', 'sass']);
gulp.task('default', ['lint-sass']);
