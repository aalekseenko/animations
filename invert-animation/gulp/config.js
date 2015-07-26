var dest = './dist';
var src = './app';

module.exports = {
  server: {
    baseDir: dest
  },
  styles: {
    src: src + '/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles'
  },
  browserify: {
    settings: {
      entries: [src + '/scripts/index.js'],
      transform: ['reactify'],
      debug: true
    },
    mapFile: dest + '/scripts/bundle.js.map',
    dest: dest + '/scripts',
    outputName: 'index.js',
  },
  html: {
    src: src + '/index.html',
    dest: dest
  },
  watch: {
    styles: {
      src: src + '/styles/**',
      tasks: ['styles']
    },
    html: {
      src: src + '/*.html',
      tasks: ['html']
    },
    js:{
      src: src + '/scripts/**',
      tasks: ['browserify']
    }
  }
};

var gulp = require('gulp');
gulp.task('build', ['browserify', 'styles', 'html']);

var gulp = require('gulp');
gulp.task('default', ['build', 'watch', 'server']);
