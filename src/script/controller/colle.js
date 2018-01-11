'use strict';
angular.module('app').controller('colle', function ($scope,$http) {
        $scope.arr4=[];
        $http.get(" https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/favorite")
            .then(function(res){
                $scope.arr4=res.data;
            })
});