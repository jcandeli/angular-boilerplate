var gulp   = require('gulp');
var pkg    = require('../package.json');
var notify = require('gulp-notify');

module.exports = function() {
    gulp.src(pkg.src + '/index.html')
            .pipe(gulp.dest(pkg.dest));

    gulp.src(pkg.vendor + '/bootstrap/fonts/*')
            .pipe(gulp.dest(pkg.dest + '/fonts'))
            .pipe(notify('index.hml copied'));
};
