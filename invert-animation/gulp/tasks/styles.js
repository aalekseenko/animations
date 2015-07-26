var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('../config').styles;

gulp.task('styles', function() {
    return gulp.src(config.src)
        .pipe(sass())
        .pipe(gulp.dest(config.dest));
});
