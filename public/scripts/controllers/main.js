bootCamp.controller('signUpCtrl', function ($scope, $location, $rootScope) {
    $scope.signIn = function () {
        $location.path('/login');
    }
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
    $scope.password='';


   $scope.signUp=function(){



   }


});


bootCamp.controller('loginCtrl', function ($scope, $location, $rootScope) {

    $scope.email = '';
    $scope.password = '';
    $scope.isLoggedIn = false;
    $scope.login = function () {
        if ($scope.email == 'badar@panacloud.com' && $scope.password == 'asdf') {

            $location.path('/home');
        }

        else {

            $location.path('/');
        }
    }

});
bootCamp.controller('homeCtrl', function ($scope, $location, $rootScope) {
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