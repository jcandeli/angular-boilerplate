(function() {
  angular.module('templates', []);

  angular.module('app', []);

  angular.module('app', ['ui.router', 'classy', 'ui.bootstrap', 'templates']);

}).call(this);

(function() {
  angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/testroute');
      return $stateProvider.state('testroute', {
        url: '/testroute',
        template: '<test-module></test-module>'
      });
    }
  ]);

}).call(this);

(function() {
  angular.module('app').directive('testModule', [
    function() {
      return {
        templateUrl: 'modules/test-module/test-module.html'
      };
    }
  ]);

}).call(this);
