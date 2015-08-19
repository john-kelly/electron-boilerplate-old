'use strict';

var gulp = require('gulp');

var config = require('../config');

gulp.task('copy', ['clean'], function() {
    return gulp.src(config.toCopy)
        .pipe(gulp.dest(config.dest));
});
