'use strict';
angular.module('app').controller('Load', function ($scope,$http,$state) {
    $scope.name="Load";
    //点击登陆
    $scope.Load=function(){
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login")
            .then(function(res){
                console.log(res);
                $state.go("myLoade");
            })
    };
});