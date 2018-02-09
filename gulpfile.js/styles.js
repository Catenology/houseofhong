const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('styles', () => (
  gulp.src(['src/_sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleancss())
    .pipe(rename({
      basename: 'main.min',
      extname: '.css',
    }))
    .pipe(gulp.dest('dist/css'))
));
