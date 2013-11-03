'use strict';

var overviewModule = angular.module('modules.overview', ['modules.conference']);

overviewModule.controller('module.overview.OverviewController', ['$scope', 'Conference', function ($scope, Conference) {
    $scope.conferences = [
        new Conference({"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25", "talks": [
            {"name":"Dominic", "description":"Dominic's presentation of his work", "startTime":"2013-10-25T07:15:00.000Z", "endTime":"2013-10-25T09:15:00.000Z"},
            {"name":"Jens", "description":"Jens' presentation of his work", "startTime":"2013-10-25T09:15:00.000Z", "endTime":"2013-10-25T12:15:00.000Z"},
            {"name":"Stephan", "description":"Stephan's presentation of his work", "startTime":"2013-10-25T12:15:00.000Z", "endTime":"2013-10-25T13:45:00.000Z"}
        ]}),
        new Conference({"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"}),
        new Conference({"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"}),
        new Conference({"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"})
    ];
    $scope.hasTalks = function(conf) {
        return conf && conf.talks && conf.talks.length > 0;
    };
}]);