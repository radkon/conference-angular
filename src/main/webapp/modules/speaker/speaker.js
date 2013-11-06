'use strict';

var speakerModule = angular.module('modules.speaker', []);

speakerModule.factory('Speaker', ['$resource', function ($resource) {
    return $resource('/conference/rest/speaker/:speakerId', {speakerId:'@id'})
}]);

speakerModule.controller('module.speaker.ListController', ['$scope', 'Speaker', function ($scope, Speaker) {
    var loadSpeakers = function() {
        $scope.speakers = Speaker.query();
    };
    $scope.delete = function(conf) {
        conf.$delete(loadSpeakers);
    }
    loadSpeakers();
}]);

speakerModule.controller('modules.speaker.CreateController', ['$scope', '$location', 'Speaker', function ($scope, $location, Speaker) {
    $scope.speaker = new Speaker();
    $scope.cancel = function () {
        $location.path('/speaker');
    };
    $scope.save = function () {
        $scope.speaker.$save(function(){
            $location.path('/speaker');
        });
    };
}]);

speakerModule.controller('modules.speaker.EditController', ['$scope', '$routeParams', '$location', 'Speaker', function ($scope, $routeParams, $location, Speaker) {
    $scope.speaker = Speaker.get({speakerId:$routeParams.speakerId});
    $scope.cancel = function () {
        $location.path('/speaker');
    };
    $scope.save = function () {
        $scope.speaker.$save(function(){
            $location.path('/speaker');
        });
    };
}]);