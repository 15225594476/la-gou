angular.module('app').directive('appChildfoo', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/Child_footer.html"
   }
});