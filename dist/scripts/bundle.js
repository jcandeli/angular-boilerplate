(function() {
  var app;

  angular.module('templates', []);

  angular.module('app', []);

  app = angular.module('app', ['ui.router', 'classy', 'ui.bootstrap', 'templates']);

  module.exports = app;

}).call(this);

(function() {
  app.config([
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
