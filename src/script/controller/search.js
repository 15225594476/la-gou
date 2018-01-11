'use strict';
angular.module('app').controller('search', function ($scope,$http) {
    //底部
    $scope.att = [
        {
            a:"职位",
            b:"example",
            c:true
        },
        {
            a:"搜索",
            b:"search",
            c:false
        },
        {
            a:"我的",
            b:"myLoad({age:2})",
            c:true
        }
    ];
    //主体内容
    $scope.arr2 = [];
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function(res){
        $scope.arr2 = res.data
    });
});