'use strict';

var argv = require('yargs').argv;
var jetpack = require('fs-jetpack');
var os = require('os');

module.exports.os = function() {
    switch (os.platform()) {
        case 'darwin':
            return 'osx';
        case 'linux':
            return 'linux';
        case 'win32':
            return 'windows';
    }
    return 'unsupported';
};

module.exports.getEnvName = function() {
    return argv.env || 'development';
};

module.exports.getElectronVersion = function() {
    var manifest = jetpack.read(__dirname + '/../../package.json', 'json');
    return manifest.devDependencies['electron-prebuilt'].substring(1);
};

module.exports.getNpmInstallCommand = function() {
    if (process.platform === 'win32') {
        return 'npm.cmd';
    } else {
        return 'npm';
    }
};
