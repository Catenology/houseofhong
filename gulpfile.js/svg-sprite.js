const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');

// Basic configuration example
const svgSpriteConfig = {
  mode: {
    defs: {
      dest: '.',
      dimensions: '-200',
    },
  },
  shape: {
    spacing: {
      box: 'border',
    },
  },
  svg: {
    dimensionAttributes: false,
  },
};

gulp.task('svg-sprite', () => {
  gulp.src('_design\\icons\\*.svg')
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(rename({
      basename: 'icons',
    }))
    .pipe(gulp.dest('src\\_includes'));
});
