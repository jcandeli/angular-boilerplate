module.exports =
    bundle:
        src : ['<%= pkg.dest %>/css/*.css', '!<%= pkg.dest %>/css/*.min.css']
        dest: '<%= pkg.dest %>/css/bundle.min.css'