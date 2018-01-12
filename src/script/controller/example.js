'use strict';
angular.module('app').controller('exampleCtrl', function ($state,$scope,$cookieStore,$rootScope,$http,httpInterceptor) {
        $rootScope.isNo=false;
        // $scope.namee="asdasdsad"

        console.log();
        if($rootScope.num){
            $scope.namee = $cookieStore.get('name').name1;
            $scope.Tiao = function(){
                $state.go("loadsucc")
            }
        }else{
            $scope.namee = "去登陆";
            $scope.Tiao = function(){
                $state.go("myLoad")
            }
        }
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
            // httpInterceptor.fn()

        });

});