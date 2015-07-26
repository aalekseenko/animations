var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var exorcist = require('exorcist');
var _if = require('gulp-if');
var config = require('../config').browserify;

gulp.task('browserify', function(){
    return browserify(config.settings).bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(_if(config.settings.debug, exorcist(config.mapFile)))
    .on('error', gutil.log.bind(gutil, 'exorcist error'))
    .pipe(source(config.outputName))
    .pipe(gulp.dest(config.dest));
});
