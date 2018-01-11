'use strict';
angular.module('app').controller('reGister', function ($scope,$http) {
    $scope.name="Load";
    $scope.confirm_reg=function(){
        alert("确认注册");
    };
    $scope.Code=function(){
        alert("获取验证码");
    };
});