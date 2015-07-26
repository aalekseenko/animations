var gulp = require('gulp'),
    config = require('../config').watch;

gulp.task('watch', function() {
    gulp.watch(config.html.src, config.html.tasks);
    gulp.watch(config.styles.src, config.styles.tasks);
    gulp.watch(config.js.src, config.js.tasks);
});
