angular.module('app').directive('appDetailsfoo', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/details_footer.html"
   }
});