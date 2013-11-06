'use strict';

var overviewModule = angular.module('modules.overview', ['modules.conference']);

overviewModule.controller('module.overview.OverviewController', ['$scope', 'Conference', function ($scope, Conference) {
    $scope.conferences = Conference.query();
    $scope.hasTalks = function(conf) {
        return conf && conf.talks && conf.talks.length > 0;
    };
}]);