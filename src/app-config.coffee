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

app.config([
    '$stateProvider'
    '$urlRouterProvider'
    ($stateProvider, $urlRouterProvider) ->
        $urlRouterProvider.otherwise('/testroute');

        $stateProvider
            .state('testroute', {
              url: '/testroute',
              template: '<test-module></test-module>'
            })
    ]
)

module.exports = app
