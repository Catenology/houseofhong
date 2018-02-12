const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('jekyll-build', (cb) => {
  exec(['jekyll b --source src'], (err) => {
    cb(err);
  });
});
