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
        //子集
        .state('child', {
            url: '/example/:id',
            templateUrl: 'view/Child.html'
        })

    $urlRouterProvider.otherwise('search');
}]);
