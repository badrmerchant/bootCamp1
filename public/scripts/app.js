var bootCamp = angular.module('bootCamp', ['ngRoute', 'ui.bootstrap', 'ui.tree'])
    .run(function ($rootScope) {//alert("run 2");

    })
    .config(['$routeProvider', function ($routeProvider) {//alert("config 1");
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/editProfile', {
                templateUrl: 'views/editProfile.html',
                controller: 'editProFileCtrl'
            })


            .otherwise({
                redirectTo: '/'
            });


    }])
