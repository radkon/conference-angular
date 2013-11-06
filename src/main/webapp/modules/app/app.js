'use strict';

// Declare app level module which depends on filters, and services
var application = angular.module('module.app', [
    'ui.bootstrap',
    'ngRoute',
    'ngResource',
    'modules.overview',
    'modules.conference',
    'modules.room',
    'modules.speaker',
    'modules.talk'
]);
application.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/overview', {
        templateUrl: 'modules/overview/overview.html',
        controller: 'module.overview.OverviewController'}
    );
    $routeProvider.when('/conference', {
        templateUrl: 'modules/conference/list.html',
        controller: 'module.conference.ListController'}
    );
    $routeProvider.when('/conference/create', {
            templateUrl: 'modules/conference/create.html',
            controller: 'modules.conference.CreateController'}
    );
    $routeProvider.when('/conference/edit/:conferenceId', {
            templateUrl: 'modules/conference/edit.html',
            controller: 'modules.conference.EditController'}
    );
    $routeProvider.when('/room', {
        templateUrl: 'modules/room/list.html',
        controller: 'module.room.ListController'}
    );
    $routeProvider.when('/room/create', {
            templateUrl: 'modules/room/create.html',
            controller: 'modules.room.CreateController'}
    );
    $routeProvider.when('/room/edit/:roomId', {
            templateUrl: 'modules/room/edit.html',
            controller: 'modules.room.EditController'}
    );
    $routeProvider.when('/speaker', {
            templateUrl: 'modules/speaker/list.html',
            controller: 'module.speaker.ListController'}
    );
    $routeProvider.when('/speaker/create', {
            templateUrl: 'modules/speaker/create.html',
            controller: 'modules.speaker.CreateController'}
    );
    $routeProvider.when('/speaker/edit/:speakerId', {
            templateUrl: 'modules/speaker/edit.html',
            controller: 'modules.speaker.EditController'}
    );
    $routeProvider.when('/talk', {
            templateUrl: 'modules/talk/list.html',
            controller: 'module.talk.ListController'}
    );
    $routeProvider.when('/talk/create', {
            templateUrl: 'modules/talk/create.html',
            controller: 'modules.talk.CreateController'}
    );
    $routeProvider.when('/talk/edit/:talkId', {
            templateUrl: 'modules/talk/edit.html',
            controller: 'modules.talk.EditController'}
    );
    $routeProvider.otherwise(
        {redirectTo: '/overview'}
    );
}]);
