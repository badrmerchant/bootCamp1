bootCamp.controller('loginCtrl', function ($scope, $location, $rootScope) {

    $scope.email = '';
    $scope.password = '';
    $scope.isLoggedIn = false;
    $scope.login = function () {
        if ($scope.email == 'badar@panacloud.com' && $scope.password == 'asdf'){alert($scope.password)
            $location.path('/home');
        }

        else{alert("22");
            $location.path('/');}
    }

});
bootCamp.controller('homeCtrl', function ($scope, $location, $rootScope) {
    $scope.goToEditprofile=function(){

$location.path('/editProfile');
    }
    alert("badar");

});
bootCamp.controller('editProFileCtrl', function ($scope, $location, $rootScope) {

$scope.goToEditpro=function(){


}


});