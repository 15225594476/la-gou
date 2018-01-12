'use strict';
angular.module('app').controller('Load', function ($scope,$http,$state,$cookieStore) {
    $scope.name="Load";
    $scope.Tex = "";
    $scope.Pas = "";
    //提示值
    $scope.span1="";
    $scope.span2="";
    //文本框输入时候
    $scope.Input=function(){
        if($scope.Tex===""){
            $scope.span1 = "不能为空";
        }
        console.log(1);
    };
    $scope.Inpass=function(){
        console.log(2);
    };
    //点击登陆
    $scope.submit=function(){
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login")
            .then(function(res){
                console.log()
                $cookieStore.put("name",{name1:res.data.name,pas:2})
                $state.go("loadsucc");
            })
    };
});

