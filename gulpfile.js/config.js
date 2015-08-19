'use strict';

var dist = './dist';
var dest = './build';
var src = './src';

module.exports = {

    dest: dest,

    src: src,

    dist: dist,

    toCopy: [
        'src/**',
        '!src/stylesheets/**',
        // NOTE Not sure why this has to be relative.
        '../node_modules/**'
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
