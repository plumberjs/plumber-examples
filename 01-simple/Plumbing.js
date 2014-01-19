// Load all the operations we need
var all      = require('plumber-all');
var write    = require('plumber-write');
var glob     = require('plumber-glob');
var bower    = require('plumber-bower');
var concat   = require('plumber-concat');
var uglifyjs = require('plumber-uglifyjs');
var hash     = require('plumber-hash');
var less     = require('plumber-less');

module.exports = function(pipelines) {

    pipelines['javascript'] = [
        all(
            [glob('src/js/**/*.js'), concat('app')],
            bower('jquery')
        ),
        uglifyjs(),
        hash(),
        write('dist-plumber')
    ];

    pipelines['css'] = [
        glob('src/stylesheets/main.less'),
        less(),
        write('dist-plumber')
    ];

};
