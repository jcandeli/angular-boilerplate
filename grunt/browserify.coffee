# browserify all things that can be
# commented code out because im unsure if we need to alias and shimmodule.exports =
module.exports =
    bundle:
        files:
            '<%= pkg.dest %>/scripts/bundle.js': ['<%= pkg.src %>/**/*.coffee', '!<%= pkg.src %>/**/*.spec.coffee']
        options:
            transform: ['coffeeify']
            browserifyOptions :
                debug : true
                basedir: '<%= pkg.src %>'
                extensions: ['.coffee']
