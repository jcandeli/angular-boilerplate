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
