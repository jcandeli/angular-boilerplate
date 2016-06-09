# preprocess the index file for dev vs prod builds
module.exports =
    dev:
        options:
            context:
                PRODUCTION: false
        src : '<%= pkg.src %>/index.unprocessed.html'
        dest: '<%= pkg.dest %>/index.html'
    prod:
        options:
            context:
                PRODUCTION: true
        src : '<%= pkg.src %>/index.unprocessed.html'
