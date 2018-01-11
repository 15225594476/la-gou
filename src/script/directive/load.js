angular.module('app').directive('loadBody', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/load.html"
   }
});