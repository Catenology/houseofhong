const gulp = require('gulp');
const replace = require('gulp-replace');
const hasha = require('hasha');

gulp.task('cachebust', ['jekyll-build'], () => {
  gulp.src(['_site/**/*.html'], { base: '_site' })
    .pipe(replace('@@main-css', hasha.fromFileSync('_site/css/main.min.css')))
    .pipe(replace('@@main-js', hasha.fromFileSync('_site/js/main.min.js')))
    .pipe(replace('@@feed-xml', hasha.fromFileSync('_site/feed.xml')))
    .pipe(gulp.dest('_site'));
});
