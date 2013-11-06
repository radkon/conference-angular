'use strict';

var speakerModule = angular.module('modules.speaker', []);

speakerModule.factory('Speaker', ['$resource', function ($resource) {
    return $resource('/conference/rest/speaker/:speakerId', {speakerId:'@id'})
}]);

speakerModule.controller('module.speaker.ListController', ['$scope', 'Speaker', function ($scope, Speaker) {
    // $scope.speakers = Speaker.query();
    $scope.speakers = [
        new Speaker({"id":"1","name":"Darko Krizic","description":"JBoss 7.1, JavaEE 6, JSF 2.1"}),
        new Speaker({"id":"1","name":"Markus Konrad","description":"Glassfish 4.0, JavaEE 7, AngularJS"})
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