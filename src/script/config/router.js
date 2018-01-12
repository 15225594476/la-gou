'use strict';
//路由
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        //职位
        .state('example', {
        url: '/example',
        templateUrl: 'view/example.html'
})
        //搜索
        .state('search', {
            url:'/search',
            templateUrl: 'view/search.html'
        })
        //我的
        .state('myLoad', {
            url: '/myLoad',
            templateUrl: 'view/myLoad.html'
        })
        //登陆成功
        .state('loadsucc', {
            url: '/loadsucc',
            templateUrl: 'view/loadsucc.html'
        })
        //登陆
        .state('load', {
            url: '/load',
            templateUrl: 'view/load.html'
        })
        //注册
        .state('register', {
            url: '/register',
            templateUrl: 'view/register.html'
        })
        //投递
        .state('delivery', {
            url: '/delivery',
            templateUrl: 'view/delivery.html'
        })
        //收藏
        .state('colle', {
            url: '/colle',
            templateUrl: 'view/colle.html'
        })
        //职位详情
        .state('details', {
            url: '/example/:id',
            templateUrl: 'view/details.html'
        })
        //公司职位
        .state('child', {
            url: '/example/:id/:id2',
            templateUrl: 'view/Child.html'
        })


    $urlRouterProvider.otherwise('search');
}]);
//正则
angular.module('app').config(['$validationProvider', function ($validationProvider) {
    var expression = {
        required: function (val) {
            return !!val;
        },
        phone:  /^1(3|4|5|7|8)\d{9}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
    };
    var defaultMsg = {
        required: {
            success: '',
            error: '不能为空'
        },
        phone: {
            success: '',
            error: '请输入正确的手机号码'
        },
        password: {
            success: '',
            error: '6-18位字母数字组合密码'
        }
    }
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
angular.module("app").factory('httpInterceptor',function($rootScope,$q,$cookieStore){
    return {
        //请求成功
        request:function(config){
            //控制显示隐藏
            $rootScope.isNo = true;
            //判断是否登陆
            if($cookieStore.get('name')){
                $rootScope.num = true;
            }else{
                $rootScope.num = false;
            }
            return config || $q.when(config);
            console.log("6666");
        },
        //请求失败
        requestError:function(rejection){
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },
        //响应
        response:function(response){
            return response || $q.when(reponse);
        },
        responseError:function(rejection){
            switch(response.status){
                case 404:
                    alert("找不到封面");
                    break;
            }
            return $q.reject(rejection);
        }
    }
    return httpInterceptor;
});
//拦截器
//定义了httpInterceptor之后，需要手动添加到$httpProvider.interceptors中去才能让拦截器生效
angular.module('app').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
    // console.log($httpProvider)
}]);