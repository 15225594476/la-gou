angular.module('app').directive('appHeader', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/header.html",
       scope:{
           myLeft:"@",
           myRight:"@",
           myMain:"@",
           myMain2:"@",
           onLeft:"&",
           onRight:"&",
           onMain:"&",
           // 搜索页的那个
           myOne:"@",
           myTwo:"@",
           myThere:"@",
           onOne:"&",
           onTwo:"&",
           onThere:"&",

       }
   }
});