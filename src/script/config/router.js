'use strict';
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
        .state('myLoade', {
            url: '/myLoade',
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