var gulp = require('gulp');
var plumber = require('gulp-plumber');
var to5 = require('gulp-6to5');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var vinylPaths = require('vinyl-paths');
var del = require('del');
var sourcemaps = require("gulp-sourcemaps");
var insert = require('gulp-insert');

var compilerOptions = {
  filename: '',
  filenameRelative: '',
  blacklist: [],
  whitelist: [],
  sourceRoot: '',
  moduleRoot: '',
  moduleIds: false,
  runtime: false,
  experimental: false,
  format: {
    comments: false,
    compact: false,
    indent: {
      parentheses: true,
      adjustMultilineComment: true,
      style: "  ",
      base: 0
    }
  }
};

var path = {
  source:'src/**/*.js',
  css: 'src/**/*.css',
  output:'dist/'
};


/**
 * Cleans the dist directory.
 */
gulp.task('clean', function() {
  return gulp.src([path.output])
    .pipe(vinylPaths(del));
});


/** 
 * The ES6 to ES6 compilation task.
 */
gulp.task('es6', function () {
  return gulp.src(path.source)
    .pipe(plumber())
    .pipe(changed(path.output, { extension: '.js' }))
    .pipe(sourcemaps.init())
    .pipe(to5(compilerOptions))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.reload({ stream: true }));
});

/**
 *
 */
gulp.task('move', function () {
  return gulp.src(path.css)
    .pipe(changed(path.output, { extension: '.css' }))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.reload({ stream: true }));
});


/**
 * Cleans and compiles the code.
 */
gulp.task('compile', function (callback) {
  return runSequence(
    'clean',
    ['es6', 'move'],
    callback
  );
});


/** 
 * Serves the code over the browser sync.
 */
gulp.task('serve', ['compile'], function (done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});


/** 
 * Watches for changes and compiles content.
 */
gulp.task('watch', ['serve'], function() {
  var watcher = gulp.watch([path.source, path.css], ['compile']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

