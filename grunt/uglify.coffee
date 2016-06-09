module.exports =
    prod:
        options:
            # mangle: true
            compress: true
        src: '<%= pkg.dest %>/scripts/vendor.js'
        dest: '<%= pkg.dest %>/scripts/vendor.min.js'
