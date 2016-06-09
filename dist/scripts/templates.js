angular.module('templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/test-module/test-module.html',
    "<div class=\"test-module\">Test modules</div>"
  );

}]);
