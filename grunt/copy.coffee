module.exports =
    main:
        files: [{expand: true, flatten: true, src: ['<%= pkg.src %>/index.html'], dest: '<%= pkg.dest %>/'}]
    fonts:
        files: [{expand: true, flatten: true, src: ['<%= pkg.vendor %>/bootstrap/fonts/*'], dest: '<%= pkg.dest %>/fonts'}]