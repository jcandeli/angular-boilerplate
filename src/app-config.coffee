angular.module('templates', [])
angular.module('app', [])

app = angular.module('app',
    [
        'ui.router'
        'classy'
        'ui.bootstrap'
        'templates'
    ]
)

module.exports = app
