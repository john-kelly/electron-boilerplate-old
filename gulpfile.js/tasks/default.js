'use strict';

var gulp = require('gulp');
var electron = require('electron-prebuilt');
var childProcess = require('child_process');

var runApp = function() {
    var app = childProcess.spawn(electron, ['./build'], {
        stdio: 'inherit'
    });

    app.on('close', function(code) {
        // User closed the app. Kill the host process.
        process.exit();
    });
};

// TODO get watch working.
gulp.task('default', ['build'], runApp);
