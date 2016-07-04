# setup watchers
module.exports =
    browserify:
        files: ['<%= pkg.src %>/**/*.coffee']
        tasks: ['browserify:bundle', 'notify:browserify']

    tests:
        files: ['<%= pkg.src %>/**/*.spec.coffee']
        tasks: ['test', 'notify:tests']

    templates:
        files: ['<%= pkg.src %>/**/*.html']
        tasks: ['ngtemplates', 'notify:ngtemplates']

    scss:
        files: ['<%= pkg.src %>/**/*.scss']
        tasks: ['sass:dist', 'cssmin', 'notify:scss']

    index:
        files: ['<%= pkg.src %>/index.html']
        tasks: ['copy:index', 'notify:index']

    options:
        livereload: true
