bootCamp.controller('signUpCtrl', function ($scope, $location, $rootScope, editFactory, $timeout) {

    //$scope.$watch('email', function () {
    //if ($scope.email == editFactory.getEditProfile()['email']) {

    // $location.path('/login');

    //}
    //})


    $scope.signIn = function () {
        $location.path('/login');
    }


    $scope.signUp = function () {

        editFactory.setEditProfile($scope.obj);

        $location.path('/login')
    }


})
bootCamp.controller('loginCtrl', function ($scope, $location, $rootScope, editFactory) {
//console.log(editFactory.getEditProfile()['email'] );
    alert(editFactory.getEditProfile()['email']);
//alert($scope.email);
    $scope.login = function () {
        alert($scope.email == editFactory.getEditProfile()['email']);
        alert($scope.password == editFactory.getEditProfile()['password']);
        if ($scope.email == editFactory.getEditProfile()['email'] && $scope.password == editFactory.getEditProfile()['password']) {

            $location.path('/home');
        }

        else {

            $location.path('/');
        }

    }


});
bootCamp.controller('homeCtrl', function ($scope, $location, $rootScope, editFactory, Duration, geoLocationFactory) {
    $scope.firstName = editFactory.getEditProfile()['firstName'];
    $scope.lastName = editFactory.getEditProfile()['lastName'];
    $scope.goToMap = function () {
        $location.path('/map');


        $scope.goToEditprofile = function () {

            $location.path('/editProfile');
        }
        $scope.$watch = function () {
            geoLocationFactory.getGeoLocation(
                function (s) {
                    if (24.9056 == s.lat && 67.0822 == s.lon) {
                        $scope.time = Duration.getDuration();
                        $scope.start = Duration.start;
                        $scope.reset = Duration.reset;
                        $scope.stop = Duration.stop;
                    }

                }
                // console.log(s.as);
                , function (err) {
                    console.log(JSON.stringify(err))
                }
            );
//    if(24.9056== a.lat && 67.0822== a.lon){
//    $scope.time = Duration.getDuration();
//    $scope.start = Duration.start;
//    $scope.reset = Duration.reset;
//    $scope.stop = Duration.stop;}

//}
            //$scope.set = geoLocationFactory.set;
            //$scope.get=geoLocationFactory.get;


//            var a = geoLocationFactory.getGeoLocation(
//                function (s) {
//                    console.log(s.as);
//                }, function (err) {
//                    console.log(JSON.stringify(err))
//                }
//            );


            //
            /*var success=function(){
             console.log(s);
             };
             var error=function(){
             console.log(JSON.stringify(err))
             };
             geoLocationFactory.getGeoLocation(success,error);*/
        }
        )
        ;
        bootCamp.controller('editProFileCtrl', function ($scope, $location, $rootScope, editFactory) {


            $scope.edit = function () {
                $scope.obj.email = editFactory.getEditProfile()['email'];
                console.log($scope.obj.email);
                console.log(editFactory.getEditProfile()['email']);
                console.log($scope.obj.email);
                editFactory.setEditProfile($scope.obj);
                console.log($scope.obj);
            }


        });
/*
 bootCamp.controller('geoLocation', function ($scope,$http,Duration) {
 $scope.duration = Duration.getDuration()
 $scope.start = Duration.start,
 // $scope.time = Duration.getDuration();
 // /$scope.start=Duration.start();

 $scope.initialze = function() {

 // Try HTML5 geolocation
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function (position) {
 $scope.latitude=position.coords.latitude;
 $scope.longitude=position.coords.longitude;
 console.log(position.coords.latitude);
 console.log(position.coords.longitude);
 // $scope.$digest();

 });
 }
 else {
 console.log("Browser doesn't support Geolocation sorry");
 }

 var url = "http://ip-api.com/json/?callback=JSON_CALLBACK";

 $http.jsonp(url).success(
 function(s) {
 $scope.ip = s.query;
 },
 function(e) { $scope.error = JSON.stringify(e); } )

 }

 $scope.initialze();
 //$scope.$digest();
 });
 */
//bootCamp.factory('geoLocationFactory', function ( $http) {
//
//    // $scope.time = Duration.getDuration();
//    // /$scope.start=Duration.start();
//    var obj = {
//        latitude:'',
//        longitude:'',
//        ip:''
//    };
//    var  initialze = function () {
//
//        // Try HTML5 geolocation
//        if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(function (position) {
//
//                obj.latitude = position.coords.latitude;
//                obj.longitude = position.coords.longitude;
//                console.log(position);
//                // $scope.$digest();
//
//            });
//        }
//        else {
//            console.log("Browser doesn't support Geolocation sorry");
//        }
//        initialze();
//        var url = "http://ip-api.com/json/?callback=JSON_CALLBACK";
//
//        $http.jsonp(url).success(
//            function (s) {
//                obj.ip = s.query;
//            },
//            function (e) {
//                e = JSON.stringify(e);
//            })
//
//    }
//
//    return{
//        obj:obj
//
//    }
//});