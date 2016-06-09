# build ng templates for angular and template cacheing
module.exports =
    ngtemplates:
        cwd : '<%= pkg.src %>/'
        src : ['**/*.html', '!**/index.html']
        dest: '<%= pkg.dest %>/scripts/templates.js'
        options:
            module: 'templates'
