var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var fs = require('fs');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});
gulp.task('templates', function() {
  var dataFile = './src/data/test.json';
  return gulp.src('src/jade/*.jade')
    .pipe($.data( function(file) {
                  return JSON.parse(fs.readFileSync(dataFile));
                } ))
    .pipe($.jade())
    .pipe(gulp.dest('./'));
});
gulp.task('image', function () {
  gulp.src('./image_assets/*.jpg')
    .pipe($.imageResize({
      width : 595
    }))
    .pipe($.image({
      jpegRecompress: true,
      jpegoptim: true
    }))
    .pipe(gulp.dest('./image_assets/compressed'));
});
gulp.task('default', ['sass', 'templates'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['src/jade/*.jade', 'src/data/*.json'], ['templates']);
});
