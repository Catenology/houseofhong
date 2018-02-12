const gulp = require('gulp');

gulp.task('build', ['scripts', 'jekyll-build', 'cachebust']);
