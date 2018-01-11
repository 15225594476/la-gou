angular.module('app').directive('appDetails', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/details.html"
   }
});