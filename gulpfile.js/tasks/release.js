'use strict';

var gulp = require('gulp');
var packager = require('electron-packager')

var config = require('../config');
var utils = require('../utils');

gulp.task('release', ['build'], function() {
    packager({
        dir: config.dest,
        name: 'Electron Boilerplate',
        version: utils.getElectronVersion(),
        all: true,
        out: config.dist,
        overwrite: true,
        // removes devDependencies!
        prune: true
    }, function(){});
});
