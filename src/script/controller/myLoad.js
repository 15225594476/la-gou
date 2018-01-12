'use strict';
angular.module('app').controller('myLoad', function ($scope,$rootScope) {

    $scope.att = [
        {
            a:"职位",
            b:"example",
            c:true
        },
        {
            a:"搜索",
            b:"search",
            c:true
        },
        {
            a:"我的",
            b:"myLoad",
            c:false
        }
    ];

});