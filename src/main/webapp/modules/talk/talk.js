'use strict';

var talkModule = angular.module('modules.talk', ['modules.conference', 'modules.room', 'modules.speaker']);

talkModule.factory('Talk', ['$resource', function ($resource) {
    return $resource('/conference/rest/talk/:talkId', {talkId:'@id'})
}]);

talkModule.controller('module.talk.ListController', ['$scope', 'Talk', function ($scope, Talk) {
    // $scope.talks = Talk.query();
    $scope.talks = [
        new Talk({"id":1,"name":"Dominic", "description":"Dominic's presentation of his work", "startTime":"2013-10-25T07:15:00.000Z", "endTime":"2013-10-25T09:15:00.000Z"}),
        new Talk({"id":2,"name":"Jens", "description":"Jens' presentation of his work", "startTime":"2013-10-25T09:15:00.000Z", "endTime":"2013-10-25T12:15:00.000Z"}),
        new Talk({"id":3,"name":"Stephan", "description":"Stephan's presentation of his work", "startTime":"2013-10-25T12:15:00.000Z", "endTime":"2013-10-25T13:45:00.000Z"})
    ];
    $scope.delete = function(conf) {
        conf.$delete();

    }
}]);

talkModule.controller('modules.talk.CreateController', ['$scope', '$location', 'Conference', 'Room', 'Speaker', 'Talk', function ($scope, $location, Conference, Room, Speaker, Talk) {
    // $scope.conferences = Conference.query();
    $scope.conferences = [
        new Conference({"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25"}),
        new Conference({"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"}),
        new Conference({"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"}),
        new Conference({"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"})
    ];
    $scope.selectedConference = $scope.conferences[0];
    // $scope.rooms = Room.query();
    $scope.rooms = [
        new Room({"id":"1","name":"Adria","capacity":100}),
        new Room({"id":"2","name":"Glaskasten","capacity":20}),
        new Room({"id":"3","name":"Konfi1","capacity":15})
    ];
    $scope.selectedRoom = $scope.rooms[0];
    // $scope.speakers = Speaker.query();
    $scope.selectedSpeaker = undefined;
    $scope.speakers = [
        new Speaker({"id":"1","name":"Darko Krizic","description":"JBoss 7.1, JavaEE 6, JSF 2.1"}),
        new Speaker({"id":"1","name":"Markus Konrad","description":"Glassfish 4.0, JavaEE 7, AngularJS"})
    ];
    $scope.talk = new Talk();
    $scope.talk.conference = $scope.conferences[0];
    $scope.talk.room = $scope.rooms[0];
    $scope.cancel = function () {
        $location.path('/talk');
    };
    $scope.save = function () {
        $scope.talk.$save(function(){
            $location.path('/talk');
        });
    };
}]);

talkModule.controller('modules.talk.EditController', ['$scope', '$routeParams', '$location', 'Conference', 'Room', 'Speaker', 'Talk', function ($scope, $routeParams, $location, Conference, Room, Speaker, Talk) {
    // $scope.conferences = Conference.query();
    $scope.conferences = [
        new Conference({"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25"}),
        new Conference({"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"}),
        new Conference({"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"}),
        new Conference({"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"})
    ];
    // $scope.rooms = Room.query();
    $scope.rooms = [
        new Room({"id":"1","name":"Adria","capacity":100}),
        new Room({"id":"2","name":"Glaskasten","capacity":20}),
        new Room({"id":"3","name":"Konfi1","capacity":15})
    ];
    // $scope.speakers = Speaker.query();
    $scope.speakers = [
        new Speaker({"id":"1","name":"Darko Krizic","description":"JBoss 7.1, JavaEE 6, JSF 2.1"}),
        new Speaker({"id":"1","name":"Markus Konrad","description":"Glassfish 4.0, JavaEE 7, AngularJS"})
    ];
    $scope.talk = Talk.get({talkId:$routeParams.talkId});
    $scope.cancel = function () {
        $location.path('/talk');
    };
    $scope.save = function () {
        $scope.talk.$save(function(){
            $location.path('/talk');
        });
    };
}]);