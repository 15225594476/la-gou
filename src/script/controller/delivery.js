'use strict';
angular.module('app').controller('delivery', function ($scope,$http,$state) {
    $scope.arr3=[];
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/my-post")
            .then(function(res){
                //遍历内容
                $scope.arr3 = res.data;

                console.log(res.data)
                //全部投递信息
                $scope.deli_a=function(){
                    $scope.arr3=res.data;
                };
                //面试邀请
                $scope.deli_b=function(){
                    $scope.op = [];
                    for(var i=0 ;i<res.data.length ;i++){
                        if(res.data[i].state==="1"){
                            $scope.op.push(res.data[i])
                        }
                    }
                    $scope.arr3=$scope.op;
                };
                //不合适
                $scope.deli_c=function(){
                    $scope.op = [];
                    for(var i=0 ;i<res.data.length ;i++){
                        if(res.data[i].state!=="1"){
                            $scope.op.push(res.data[i])
                        }
                    }
                    $scope.arr3=$scope.op;
                };

                //    后退
                $scope.left = function(){
                    history.go(-1);
                };

                //    后退
                $scope.right = function(){
                    $state.go("example");
                };
            });
});