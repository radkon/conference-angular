'use strict';

var speakerModule = angular.module('modules.speaker', []);

speakerModule.factory('Speaker', ['$resource', function ($resource) {
    return $resource('/conference/rest/speaker/:speakerId', {speakerId:'@id'})
}]);

speakerModule.controller('module.speaker.ListController', ['$scope', 'Speaker', function ($scope, Speaker) {
    // $scope.speakers = Speaker.query();
    $scope.speakers = [
        new Speaker({"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25", "talks": [
            {"name":"Dominic", "description":"Dominic's presentation of his work", "startTime":"2013-10-25T07:15:00.000Z", "endTime":"2013-10-25T09:15:00.000Z"},
            {"name":"Jens", "description":"Jens' presentation of his work", "startTime":"2013-10-25T09:15:00.000Z", "endTime":"2013-10-25T12:15:00.000Z"},
            {"name":"Stephan", "description":"Stephan's presentation of his work", "startTime":"2013-10-25T12:15:00.000Z", "endTime":"2013-10-25T13:45:00.000Z"}
        ]}),
        new Speaker({"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"}),
        new Speaker({"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"}),
        new Speaker({"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"})
    ];
    $scope.delete = function(conf) {
        conf.$delete();

    }
}]);

speakerModule.controller('modules.speaker.CreateController', ['$scope', '$location', 'Speaker', function ($scope, $location, Speaker) {
    $scope.speaker = new Speaker();
    $scope.cancel = function () {
        $location.path('/speaker');
    };
    $scope.save = function () {
        $scope.speaker.$save();
        $location.path('/speaker');
    };
}]);

speakerModule.controller('modules.speaker.EditController', ['$scope', '$routeParams', '$location', 'Speaker', function ($scope, $routeParams, $location, Speaker) {
    $scope.speaker = Speaker.get({speakerId:$routeParams.speakerId});
    $scope.cancel = function () {
        $location.path('/speaker');
    };
    $scope.save = function () {
        $scope.speaker.$save();
        $location.path('/speaker');
    };
}]);