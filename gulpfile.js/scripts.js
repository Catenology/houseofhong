const gulp = require('gulp');
const browserify = require('browserify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');

gulp.task('scripts', () => (
  browserify({ entries: 'src/_js/main.js', debug: true })
    .transform('babelify', { presets: ['env'] })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('src/js'))
));
