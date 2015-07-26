var gulp = require('gulp'),
    browserSync = require('browser-sync').create('sync'),
    config = require('../config').server;

gulp.task('server', function () {
  browserSync.init(["**/*.css", '**/*.js'], { 
    server: { 
      baseDir: './dist'
    }
  });
});