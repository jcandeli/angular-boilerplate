var gulp    = require('gulp');
var pkg     = require('../package.json');
var concat  = require('gulp-concat');
var files   = [
    pkg.vendor + '/angular/angular.js',
    pkg.vendor + '/angular-classy/angular-classy.min.js',
    pkg.vendor + '/angular-bootstrap/ui-bootstrap.js',
    pkg.vendor + '/angular-bootstrap/ui-bootstrap-tpls.js',
    pkg.vendor + '/angular-ui-router/release/angular-ui-router.min.js'
];

module.exports = function() {
    gulp.src(files)
            .pipe(concat('vendor.js'))
            .pipe(gulp.dest(pkg.dest + '/scripts'))

    gulp.src(pkg.vendor + '/bootstrap/dist/css/bootstrap.min.css')
            .pipe(concat('vendor.min.css'))
            .pipe(gulp.dest(pkg.dest + '/css'))
};
