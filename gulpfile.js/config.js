'use strict';

var dist = './dist';
var dest = './build';
var src = './src';

var packageJson = require('../package.json');

console.log(packageJson);

module.exports = {

    dest: dest,

    src: src,

    dist: dist,

    toCopy: [
        'src/**/*.js',
        'src/node_modules/**',
        'src/bower_components/**',
        'src/vendor/**',
        'src/**/*.html'
    ],

    less: {
        src: src + '/stylesheets/**/*.less',
        dest: dest + '/stylesheets',
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images'
    },
};
