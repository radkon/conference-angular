'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
    controller('SpeakerBackofficeCtrl', ['$scope', function ($scope) {
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
    }]);
