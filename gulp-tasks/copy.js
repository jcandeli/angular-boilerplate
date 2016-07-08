var gulp    = require('gulp');
var pkg = require('../package.json');

module.exports = function() {
    gulp.src(pkg.src + '/index.html')
            .pipe(gulp.dest(pkg.dest))

    gulp.src(pkg.vendor + '/bootstrap/fonts/*')
            .pipe(gulp.dest(pkg.dest + '/fonts'))
};