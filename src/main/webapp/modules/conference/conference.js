'use strict';

var conferenceModule = angular.module('modules.conference', []);

conferenceModule.factory('Conference', ['$resource', function ($resource) {
    return $resource('/conference/rest/conference/:conferenceId', {conferenceId:'@id'})
}]);

conferenceModule.controller('module.conference.ListController', ['$scope', 'Conference', function ($scope, Conference) {
    var loadConferences = function(){
        $scope.conferences = Conference.query();
    };
    $scope.delete = function(conf) {
        conf.$delete(loadConferences);

    };
    loadConferences();
}]);

conferenceModule.controller('modules.conference.CreateController', ['$scope', '$location', 'Conference', function ($scope, $location, Conference) {
    $scope.conference = new Conference();
    $scope.cancel = function () {
        $location.path('/conference');
    };
    $scope.save = function () {
        $scope.conference.$save(function(){
            $location.path('/conference');
        });
    };
}]);

conferenceModule.controller('modules.conference.EditController', ['$scope', '$routeParams', '$location', 'Conference', function ($scope, $routeParams, $location, Conference) {
    $scope.conference = Conference.get({conferenceId:$routeParams.conferenceId});
    $scope.cancel = function () {
        $location.path('/conference');
    };
    $scope.save = function () {
        $scope.conference.$save(function(){
            $location.path('/conference');
        });
    };
}]);