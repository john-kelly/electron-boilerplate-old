'use strict';

var gulp = require('gulp');
var packager = require('electron-packager')

var config = require('../config');

gulp.task('release', ['build'], function() {
    packager({
        dir: config.dest,
        name: 'Electron Boilerplate',
        version: '0.30.1',
        all: true,
        out: config.dist,
        overwrite: true
    }, function(){});
});
