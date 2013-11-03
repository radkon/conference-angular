'use strict';

// Declare app level module which depends on filters, and services
var application = angular.module('module.app', [
    'ui.bootstrap',
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'modules.overview',
    'modules.conference'
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
    $routeProvider.when('/speaker', {
        templateUrl: 'views/private/speakersBackoffice.html',
        controller: 'SpeakerBackofficeCtrl'}
    );
    $routeProvider.when('/room', {
        templateUrl: 'views/private/roomsBackoffice.html',
        controller: 'RoomBackofficeCtrl'}
    );
    $routeProvider.when('/talk', {
        templateUrl: 'views/private/talkBackoffice.html',
            controller: 'TalkBackofficeCtrl'}
    );
    $routeProvider.otherwise(
        {redirectTo: '/overview'}
    );
}]);
