/**
 * Created by Badar on 10/24/2014.
 */
bootCamp.factory('editFactory', function ($localstorage) {



    var editProfile;

    function updateData(){
        $localstorage.setObject('user2',{editProfile:editProfile});
    }





    if(!localStorage.user)
        $localstorage.setObject('user2',{editProfile:editProfile});
    else
    if ($localstorage.getObject('user2').editProfile)
        editProfile=$localstorage.getObject('user2').editProfile;




    function setEditProfile(a) {


        editProfile=a;
        updateData();

    }
    function getEditProfile() {
        alert("get");

        updateData();
        return $localstorage.getObject('user2').editProfile;

    }


//console.log(selectedCourseFromJoinedCourses);
    function upDate() {
    }


    return {
        setEditProfile:setEditProfile,
        getEditProfile  :getEditProfile

    }


});

