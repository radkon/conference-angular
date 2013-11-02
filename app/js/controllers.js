'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('ConferenceBackofficeCtrl', ['$scope', function ($scope) {
        var mode = 'create';
        $scope.conference = undefined;
        $scope.conferences = [
            {"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25", "talks": [
                {"name":"Dominic", "description":"Dominic's presentation of his work", "startTime":"2013-10-25T07:15:00.000Z", "endTime":"2013-10-25T09:15:00.000Z"},
                {"name":"Jens", "description":"Jens' presentation of his work", "startTime":"2013-10-25T09:15:00.000Z", "endTime":"2013-10-25T12:15:00.000Z"},
                {"name":"Stephan", "description":"Stephan's presentation of his work", "startTime":"2013-10-25T12:15:00.000Z", "endTime":"2013-10-25T13:45:00.000Z"}
            ]},
            {"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"},
            {"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"},
            {"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"}
        ];
        $scope.editModeEnabled = function() {
            return mode == 'edit';
        };
        $scope.startEditing = function(conference) {
            $scope.conference = conference;
            mode = 'edit';
        };
        $scope.cancelEditing = function() {
            $scope.conference = undefined;
            mode = 'create';
        };
        $scope.saveConference = function(conference) {
            $scope.cancelEditing();
            // TODO update Conference
            // TODO reload Conference list
        };
    }]).controller('SpeakerBackofficeCtrl', ['$scope', function ($scope) {
        var mode = 'create';
        $scope.speaker = undefined;
        $scope.speakers = [
            {"id":"1","name":"Markus Konrad", "description":"JavaEE7 & AngularJS"},
            {"id":"2","name":"Stephan Eichmann", "description":"JavaEE6 & PrimeFaces"}
        ];
        $scope.editModeEnabled = function() {
            return mode == 'edit';
        };
        $scope.startEditing = function(speaker) {
            $scope.speaker = speaker;
            mode = 'edit';
        };
        $scope.cancelEditing = function() {
            $scope.speaker = undefined;
            mode = 'create';
        };
        $scope.saveSpeaker = function(speaker) {
            $scope.cancelEditing();
            // TODO update Speaker
            // TODO reload Speaker list
        };
    }]).controller('RoomBackofficeCtrl', ['$scope', function ($scope) {
        var mode = 'create';
        $scope.room = undefined;
        $scope.rooms = [
            {"id":"1","name":"Konferenz 1", "capacity":15},
            {"id":"2","name":"Glaskasten", "capacity":30}
        ];
        $scope.startEditing = function(room) {
            $scope.room = room;
            mode = 'edit';
        };
        $scope.cancelEditing = function() {
            $scope.room = undefined;
            mode = 'create';
        };
        $scope.saveSpeaker = function(room) {
            // TODO update Speaker
            // TODO reload Speaker list
            $scope.room = undefined;
        };
        $scope.editModeEnabled = function() {
            return mode == 'edit';
        }
    }]).controller('ConferenceListCtrl', ['$scope', function ($scope) {
        $scope.conferences = [
            {"id":"1","name":"PAC Abschluss 1","description":"Präsentation der PAC Abschlussarbeit (Termin 1)", "startDate":"2013-10-25", "endDate":"2013-10-25", "talks": [
                {"name":"Dominic", "description":"Dominic's presentation of his work", "startTime":"2013-10-25T07:15:00.000Z", "endTime":"2013-10-25T09:15:00.000Z"},
                {"name":"Jens", "description":"Jens' presentation of his work", "startTime":"2013-10-25T09:15:00.000Z", "endTime":"2013-10-25T12:15:00.000Z"},
                {"name":"Stephan", "description":"Stephan's presentation of his work", "startTime":"2013-10-25T12:15:00.000Z", "endTime":"2013-10-25T13:45:00.000Z"}
            ]},
            {"id":"2","name":"PAC Abschluss 2","description":"Präsentation der PAC Abschlussarbeit (Termin 2)", "startDate":"2013-11-01", "endDate":"2013-11-01"},
            {"id":"3","name":"PAC Abschluss 3","description":"Präsentation der PAC Abschlussarbeit (Termin 3)", "startDate":"2013-11-08", "endDate":"2013-11-08"},
            {"id":"4","name":"PAC Abschluss 4","description":"Präsentation der PAC Abschlussarbeit (Termin 4)", "startDate":"2013-11-15", "endDate":"2013-11-15"}
        ];
        var hasTalks = function(conf) {
            return conf && conf.talks && conf.talks.length > 0;
        };
        $scope.hideTalkList = function(conf) {
            return !hasTalks(conf);
        };
    }]);
