# setup sass tasks
module.exports =
    options:
        compass  : false
        sourcemap: true
        loadPath : [
            '<%= pkg.src %>/scss/'
        ]

    dist:
        options:
            style: 'nested'
        files: [
            expand : true
            flatten: true
            cwd    : '<%= pkg.src %>/'
            src    : ['**/*.scss']
            dest   : '<%= pkg.dest %>/css/'
            ext    : '.css'
        ]