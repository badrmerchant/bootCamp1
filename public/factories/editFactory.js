/**
 * Created by Badar on 10/24/2014.
 */
bootCamp.factory('editFactory', function ($localstorage, $modal) {
    var addQuiz;
    var addQuestion=[];
  //  var quizs=[];
    var editProfile={};

    function updateData(){
        $localstorage.setObject('user2',{editProfile:editProfile});
    }





    if(!localStorage.user)
        $localstorage.setObject('user2',{editProfile:editProfile});
    else
    if ($localstorage.getObject('user2').editProfile)
        editProfile=$localstorage.getObject('user2').editProfile;


    var makeQuizTaker=
    {
        'addPages': [],
        addQuiz: [

        ],
        addQuestion: [

        ],
        'addLater': []


    };

    function setEditProfile(a) {


        quizs.push(a);
        updateData();

    }
    function getEditProfile() {

        updateData();
        return quizs;

    }

    function setAddQuestion(a) {

        addQuestion.push(a);


    }
    function getAddQuestion(){

        return addQuestion;
    }
//console.log(selectedCourseFromJoinedCourses);
    function upDate() {
    }


    return {
        makeQuizTaker:makeQuizTaker,
        setAddQuestion:setAddQuestion,
        getAddQuestion: getAddQuestion,
        getQuizs:getQuizs,
        setQuizs:setQuizs,
        quizs:quizs,
        updateData:updateData
    }


});

