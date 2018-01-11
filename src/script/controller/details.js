'use strict';
angular.module('app').controller('details', function ($scope,$http,$state) {
    $scope.name=565656;
    $scope.att
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-detail").then(function(res){
        console.log(res)
        $scope.att=res.data[$state.params.id];
        $scope.clik = function(){
            $state.go();
        }
        $scope.clik = function(){
            console.log(2);
            $state.go("child",{id:$state.params.id,id2:$state.params.id});
        };
    });
    console.log($state)
});