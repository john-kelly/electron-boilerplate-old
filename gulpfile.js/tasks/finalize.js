'use strict';

var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var dest = require('../config').dest;
var src = require('../config').src;
var utils = require('../utils/utils');

var projectDir = jetpack;

var destDir = projectDir.cwd(dest);
var srcDir = projectDir.cwd(src);
var currentDir = projectDir.cwd('.');

gulp.task('finalize', ['clean'], function() {
    var manifest = currentDir.read('package.json', 'json');
    switch (utils.getEnvName()) {
        case 'development':
            // Add "dev" suffix to name, so Electron will write all
            // data like cookies and localStorage into separate place.
            manifest.name += '-dev';
            manifest.productName += ' Dev';
            break;
        // TODO Configure Testing.
        // case 'test':
        //     // Add "test" suffix to name, so Electron will write all
        //     // data like cookies and localStorage into separate place.
        //     manifest.name += '-test';
        //     manifest.productName += ' Test';
        //     // Change the main entry to spec runner.
        //     manifest.main = 'spec.js';
        //     break;
    }
    destDir.write('package.json', manifest);

    var configFilePath = projectDir.path('config/env_' +
                                         utils.getEnvName() + '.json');
    destDir.copy(configFilePath, 'env_config.json');
});
