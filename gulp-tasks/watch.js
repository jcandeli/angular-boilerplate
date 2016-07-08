var gulp  = require('gulp');
var pkg   = require('../package.json');

module.exports = function() {
    gulp.watch(pkg.src + '/**/*.coffee', ['coffee']);
    gulp.watch(pkg.src + '/**/*.html', ['ng-templates']);
    gulp.watch(pkg.src + '/**/*.scss', ['sass']);
    gulp.watch(pkg.src + '/index.html', ['copy']);
};
