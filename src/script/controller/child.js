'use strict';
angular.module('app').controller('child', function ($scope,$http,$state) {
    $scope.att={};
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function(res){

        $scope.att=res.data[$state.params.id];
        console.log($scope.att);
    });
});