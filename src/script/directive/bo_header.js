angular.module('app').directive('boHeader', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/bo_header.html",
       scope:{
           myRody:"@"
       }
   }
});