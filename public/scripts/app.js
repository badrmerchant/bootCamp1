var bootCamp = angular.module('bootCamp', ['ngRoute', 'ui.bootstrap', 'ui.tree'])
    .run(function ($rootScope) {//alert("run 2");

    })
    .config(['$routeProvider', function ($routeProvider) {//alert("config 1");
        $routeProvider
            .when('/', {
                templateUrl: 'views/signUp.html',
                controller: 'signUpCtrl'
            })
            .when('/login', {
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
           .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'geoLocation'
            })

            .otherwise({
                redirectTo: '/'
            });


    }])

    .factory('$localstorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }]);