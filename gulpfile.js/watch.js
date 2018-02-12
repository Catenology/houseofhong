const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('watch', () => {
  exec('jekyll s --source src');
  setTimeout(() => {
    exec('start chrome http://localhost:4000');
  }, 3000);
});
