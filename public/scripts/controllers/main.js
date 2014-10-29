bootCamp.controller('signUpCtrl', function ($scope, $location, $rootScope, editFactory, $timeout) {




    $scope.signIn = function () {
        $location.path('/login');
    }


    $scope.signUp = function () {

        editFactory.setEditProfile($scope.obj);

        $location.path('/login')
    }


});
bootCamp.controller('loginCtrl', function ($scope, $location, $rootScope, editFactory) {

    alert(editFactory.getEditProfile()['email']);

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
bootCamp.controller('homeCtrl', function ($scope, $location, $rootScope,editFactory, Duration) {
    $scope.firstName = editFactory.getEditProfile()['firstName'];
    $scope.lastName = editFactory.getEditProfile()['lastName'];
    $scope.goToMap = function () {
        $location.path('/map');
    }

    $scope.goToEditprofile = function () {

        $location.path('/editProfile');
    }

//Timer code goes here
    $scope.time = Duration.getDuration();
    $scope.start = Duration.start;
    $scope.reset = Duration.reset;
    $scope.stop = Duration.stop;
});


        //
        /*var success=function(){
         console.log(s);
         };
         var error=function(){
         console.log(JSON.stringify(err))
         };
         geoLocationFactory.getGeoLocation(success,error);*/
    //});

bootCamp.controller('editProFileCtrl', function ($scope,editFactory) {


    $scope.edit = function () {
        $scope.obj.email = editFactory.getEditProfile()['email'];

        editFactory.setEditProfile($scope.obj);

    }


});
