bootCamp.controller('signUpCtrl', function ($scope, $location, $rootScope, editFactory,$timeout) {

    $scope.$watch('email', function () {
        if ($scope.email == editFactory.getEditProfile()['email']) {

                $location.path('/login');

        }
    })


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
bootCamp.controller('homeCtrl', function ($scope, $location, $rootScope,editFactory) {
   $scope.firstName=editFactory.getEditProfile()['firstName'];
    $scope.lastName=editFactory.getEditProfile()['lastName'];
   $scope.goToMap=function(){
       $location.path('/map');
   }


    $scope.goToEditprofile = function () {

        $location.path('/editProfile');
    }


});
bootCamp.controller('editProFileCtrl', function ($scope, $location, $rootScope) {
    $scope.firstName;
    $scope.lastName;
    $scope.conpany;
    $scope.email;
    $scope.timeZone;
    $scope.userName;
    $scope.password;
    $scope.confirmPassword;


});
bootCamp.controller('geoLocation', function ($scope) {
    $scope.ip = '';
    var map;

    function initialize() {
        var mapOptions = {
            zoom: 6
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        // Try HTML5 geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

                var infowindow = new google.maps.InfoWindow({
                    map: map,
                    position: pos,
                    content: 'You Are Here.'
                });

                map.setCenter(pos);
            }, function () {
                $scope.handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
        }
    }

    $scope.handleNoGeolocation = function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
        } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        var table_body = "";
        console.log(data);
        table_body = data.query;
        $scope.ip = table_body;
        $("#GeoResults").html(table_body);
    });
    initialize()

});