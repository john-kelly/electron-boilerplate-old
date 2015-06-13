'use strict';

var dest = './build';
var src = './src';

module.exports = {

    dest: dest,

    src: src,

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
