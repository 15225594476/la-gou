angular.module('app').directive('dianJi', function () {
   return {
       restrict: 'EA',
       replace: true,
       controller:function($scope,$state,$http){
           // console.log($scope.name);
           $scope.name="";
           //点击我的
           $scope.ac=function(){
               console.log($scope.name)
                   $state.go("myLoad");
           };
       }
   }
});