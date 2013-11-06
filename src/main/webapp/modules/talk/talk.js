'use strict';

var talkModule = angular.module('modules.talk', []);

talkModule.factory('Talk', ['$resource', function ($resource) {
    return $resource('/conference/rest/talk/:talkId', {talkId:'@id'})
}]);

talkModule.controller('module.talk.ListController', ['$scope', 'Talk', function ($scope, Talk) {
    // $scope.talks = Talk.query();
    $scope.talks = [
        new Talk({"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25", "talks": [
            {"name":"Dominic", "description":"Dominic's presentation of his work", "startTime":"2013-10-25T07:15:00.000Z", "endTime":"2013-10-25T09:15:00.000Z"},
            {"name":"Jens", "description":"Jens' presentation of his work", "startTime":"2013-10-25T09:15:00.000Z", "endTime":"2013-10-25T12:15:00.000Z"},
            {"name":"Stephan", "description":"Stephan's presentation of his work", "startTime":"2013-10-25T12:15:00.000Z", "endTime":"2013-10-25T13:45:00.000Z"}
        ]}),
        new Talk({"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"}),
        new Talk({"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"}),
        new Talk({"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"})
    ];
    $scope.delete = function(conf) {
        conf.$delete();

    }
}]);

talkModule.controller('modules.talk.CreateController', ['$scope', '$location', 'Talk', function ($scope, $location, Talk) {
    $scope.talk = new Talk();
    $scope.cancel = function () {
        $location.path('/talk');
    };
    $scope.save = function () {
        $scope.talk.$save();
        $location.path('/talk');
    };
}]);

talkModule.controller('modules.talk.EditController', ['$scope', '$routeParams', '$location', 'Talk', function ($scope, $routeParams, $location, Talk) {
    $scope.talk = Talk.get({talkId:$routeParams.talkId});
    $scope.cancel = function () {
        $location.path('/talk');
    };
    $scope.save = function () {
        $scope.talk.$save();
        $location.path('/talk');
    };
}]);