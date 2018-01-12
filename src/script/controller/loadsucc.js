'use strict';
angular.module('app').controller('loadSucc', function ($scope,$http,$state,$cookieStore) {
    $scope.arr={};
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login")
        .then(function(res){
            $scope.arr=res.data;
            console.log(res);
        })
        $scope.block=function(){
            console.log("退出登录");
            //删除cookie值
            $cookieStore.remove('name');
            $state.go("myLoad");
        }
});