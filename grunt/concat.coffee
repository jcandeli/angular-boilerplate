module.exports =
    dist:
        files:
            '<%= pkg.dest %>/scripts/vendor.js': [
                '<%= pkg.vendor %>/angular/angular.js'
                '<%= pkg.vendor %>/angular-classy/angular-classy.min.js'
                '<%= pkg.vendor %>/angular-bootstrap/ui-bootstrap.js'
                '<%= pkg.vendor %>/angular-bootstrap/ui-bootstrap-tpls.js'
                '<%= pkg.vendor %>/angular-ui-router/release/angular-ui-router.min.js'
            ]
    css:
        files:
            '<%= pkg.dest %>/css/vendor.min.css': [
                '<%= pkg.vendor %>/bootstrap/dist/css/bootstrap.min.css'
            ]
