var gulp        = require('gulp');
var pkg         = require('../package.json');
var ngTemplates = require('gulp-ng-templates');
var htmlmin     = require('gulp-htmlmin');
var notify      = require('gulp-notify');

module.exports = function() {
    return gulp.src(pkg.src + '/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplates({
            filename: 'templates.js',
            module: 'templates'
        }))
        .pipe(gulp.dest(pkg.dest + '/scripts'))
        .pipe(notify('Templates compiled'));
};