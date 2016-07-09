var gulp    = require('gulp');
var pkg     = require('../package.json');
var concat  = require('gulp-concat');
var coffee  = require('gulp-coffee');
var notify  = require('gulp-notify');

module.exports = function() {
    return gulp.src(pkg.src + '/**/*.coffee')
            .pipe(coffee())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(pkg.dest + '/scripts'))
            .pipe(notify('Coffeescript has been compiled and minified'));
};
