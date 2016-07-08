var gulp    = require('gulp');
var sass    = require('gulp-sass');
var pkg     = require('../package.json');
var concat  = require('gulp-concat');
var flatten = require('gulp-flatten');

module.exports = function() {
    return gulp.src(pkg.src + '/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(flatten())
            .pipe(concat('bundle.min.css'))
            .pipe(gulp.dest(pkg.dest + '/css'));
};