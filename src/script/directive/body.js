//主体部分
angular.module('app').directive('appBody', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl:"../view/template/body.html",
       controller:function($scope,$state,$http){
            $scope.attr=function(index){
                $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function(res){
                    $state.go("details",{id:res.data[index].id})
                });
            }
       },
       scope:{
           myDate:"="
       }
   }
});