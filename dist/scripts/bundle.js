(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app;

angular.module('templates', []);

angular.module('app', []);

app = angular.module('app', ['ui.router', 'classy', 'ui.bootstrap', 'templates']);

app.config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/testroute');
    return $stateProvider.state('testroute', {
      url: '/testroute',
      template: '<test-module></test-module>'
    });
  }
]);

module.exports = app;


},{}],2:[function(require,module,exports){
angular.module('app').directive('testModule', [
  function() {
    return {
      templateUrl: 'modules/test-module/test-module.html'
    };
  }
]);


},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAtY29uZmlnLmNvZmZlZSIsIm1vZHVsZXMvdGVzdC1tb2R1bGUvdGVzdC1tb2R1bGUtZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7O0FBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLEVBQTVCOztBQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixFQUFzQixFQUF0Qjs7QUFFQSxHQUFBLEdBQU0sT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLEVBQ0YsQ0FDSSxXQURKLEVBRUksUUFGSixFQUdJLGNBSEosRUFJSSxXQUpKLENBREU7O0FBU04sR0FBRyxDQUFDLE1BQUosQ0FBVztFQUNQLGdCQURPLEVBRVAsb0JBRk8sRUFHUCxTQUFDLGNBQUQsRUFBaUIsa0JBQWpCO0lBQ0ksa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsWUFBN0I7V0FFQSxjQUNJLENBQUMsS0FETCxDQUNXLFdBRFgsRUFDd0I7TUFDbEIsR0FBQSxFQUFLLFlBRGE7TUFFbEIsUUFBQSxFQUFVLDZCQUZRO0tBRHhCO0VBSEosQ0FITztDQUFYOztBQWNBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDMUJqQixPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsQ0FBQyxTQUF0QixDQUFnQyxZQUFoQyxFQUE4QztFQUFDLFNBQUE7V0FDM0M7TUFDSSxXQUFBLEVBQWEsc0NBRGpCOztFQUQyQyxDQUFEO0NBQTlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSlcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSlcblxuYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsXG4gICAgW1xuICAgICAgICAndWkucm91dGVyJ1xuICAgICAgICAnY2xhc3N5J1xuICAgICAgICAndWkuYm9vdHN0cmFwJ1xuICAgICAgICAndGVtcGxhdGVzJ1xuICAgIF1cbilcblxuYXBwLmNvbmZpZyhbXG4gICAgJyRzdGF0ZVByb3ZpZGVyJ1xuICAgICckdXJsUm91dGVyUHJvdmlkZXInXG4gICAgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy90ZXN0cm91dGUnKTtcblxuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCd0ZXN0cm91dGUnLCB7XG4gICAgICAgICAgICAgIHVybDogJy90ZXN0cm91dGUnLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx0ZXN0LW1vZHVsZT48L3Rlc3QtbW9kdWxlPidcbiAgICAgICAgICAgIH0pXG4gICAgXVxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcFxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmRpcmVjdGl2ZSgndGVzdE1vZHVsZScsIFsoKSAtPlxuICAgIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3Rlc3QtbW9kdWxlL3Rlc3QtbW9kdWxlLmh0bWwnXG4gICAgfVxuXSkiXX0=
