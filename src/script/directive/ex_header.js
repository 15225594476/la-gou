angular.module('app').directive('exHeader', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/ex_header.html",
       scope:{
           myName:"@",
           onSend: '&'
       }
   }
});