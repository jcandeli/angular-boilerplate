var pkg     = require('../package.json');
var connect = require('gulp-connect');

module.exports = function() {
    return connect.server({
        root: pkg.dest,
        port: 5001
    });
};