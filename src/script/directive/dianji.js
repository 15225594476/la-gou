angular.module('app').directive('dianJi', function () {
   return {
       restrict: 'EA',
       replace: true,
       controller:function($scope,$state,$http,$rootScope){
           // console.log($scope.name);
           $scope.name="";
           //点击我的
           $scope.ac=function(){
               if($rootScope.num){
                   $state.go("loadsucc");
               }else{
                   $state.go("myLoad");
               }
           };
       }
   }
});