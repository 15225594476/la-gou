angular.module('app').directive('appChild', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/Child.html"
   }
});