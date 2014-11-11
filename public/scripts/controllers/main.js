bootCamp.controller('signUpCtrl', function ($scope, $location, $rootScope, editFactory, $timeout,Duration) {



    $scope.signIn = function () {

        if (editFactory.getEditProfile()['email'] == $scope.email) {
            $location.path('/login');
        }
    }

    $scope.signUp = function () {
   $scope.obj.emils=[];
 var emails=editFactory.getEditProfile()['emails'];
        emails.forEach(function(a){console.log(a);})
        console.log(emails);
        $scope.obj.emils.push($scope.obj.email);

        if(true){}
        $scope.obj.time=0;
        editFactory.setEditProfile($scope.obj);
       var a= editFactory.getEditProfile();
        console.log(a);
        $location.path('/login')
    }


});
bootCamp.controller('loginCtrl', function ($scope, $location, $rootScope, editFactory) {

//    alert(editFactory.getEditProfile()['email']);

    $scope.login = function () {
//        alert($scope.email == editFactory.getEditProfile()['email']);
//        alert($scope.password == editFactory.getEditProfile()['password']);
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
    console.log('home ctrl is running');


    /*Start timer*/
    var verifyLogin = function () {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    var onSuccess = function (position) {
        var lat = position.coords.latitude.toFixed(4);
        var log = position.coords.longitude.toFixed(4);
        if ((lat >= 24.8140 && lat <= 24.8142) && (log >= 67.0503 && log <= 67.0506)) {
            console.log(position)


            Duration.lastTime(editFactory.getEditProfile()['time'])
            $scope.time = Duration.getDuration();
            //$scope.countedTime = editFactory.getEditProfile()['time'];

            $scope.start = Duration.start;
            $scope.stop = Duration.stop;
            $scope.reset = Duration.reset;


        }
        else {
            alert('sign in with your own network');
            // $state.go('home.main');
        }
        //$scope.$digest();
    };
    verifyLogin();
    var onError = function () {
        alert('Please Check your Internet Connection!');
    };
    //$scope.countedTime = editFactory.getEditProfile()['time'];
 $scope.totalTime=function(){
    $scope.time1= Duration.getDuration();

        console.log( $scope.time1);



        console.log(editFactory.getEditProfile()['time']);
   }
})
bootCamp.controller('editProFileCtrl', function ($scope,editFactory) {
     $scope.obj=editFactory.getEditProfile();
   console.log($scope.obj);
    $scope.edit = function () {
        $scope.obj.email = editFactory.getEditProfile()['email'];

        editFactory.setEditProfile($scope.obj);

    }


})
