'use strict';
angular.module('app').controller('exampleCtrl', function ($scope,$http) {
        $scope.att = [
            {
                a:"职位",
                b:"example",
                c:false
            },
            {
                a:"搜索",
                b:"search",
                c:true
            },
            {
                a:"我的",
                b:"myLoad({age:1})",
                c:true
            }
        ];
        $scope.arr1 = [];
        $scope.name='1';
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function(res){
            $scope.arr1 = res.data
            // console.log($scope.arr);
        });

});