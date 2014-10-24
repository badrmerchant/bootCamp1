bootCamp.controller('signUpCtrl', function ($scope, $location, $rootScope,editFactory) {
    $scope.signIn = function () {
        $location.path('/login');
    }
//    $scope.firstName = '';
//    $scope.lastName = '';
//    $scope.email = '';
//    $scope.password='';


   $scope.signUp=function(){

editFactory.setEditProfile($scope.obj);

$location.path('/login')
   }


})
    bootCamp.controller('loginCtrl', function ($scope, $location, $rootScope,editFactory) {
//console.log(editFactory.getEditProfile()['email'] );
alert(editFactory.getEditProfile()['email']);

    $scope.login = function () {alert("dfds");
       editFactory.getEditProfile()
       if ($scope.email == editFactory.getEditProfile()['email'] && $scope.password == editFactory.getEditProfile()['password']) {
          condsole.log(editFactory.getEditProfile()['email'] );
            $location.path('/home');
        }

        else {

            $location.path('/');
        }

    }
//     if ($scope.email == editFactory.getEditProfile()['email'] && $scope.password == editFactory.getEditProfile().password) {
//          condsole.log(editFactory.getEditProfile()['email'] );
//          $location.path('/home');
//      }
//
//        else {
//
//           $location.path('/');
//       }


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