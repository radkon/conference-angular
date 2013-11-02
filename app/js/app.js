'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ui.bootstrap',
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/conferences', {templateUrl: 'views/public/conferenceList.html', controller: 'ConferenceListCtrl'});
        $routeProvider.when('/conferencesBackoffice', {templateUrl: 'views/private/conferencesBackoffice.html', controller: 'ConferenceBackofficeCtrl'});
    $routeProvider.when('/speakersBackoffice', {templateUrl: 'views/private/speakersBackoffice.html', controller: 'SpeakerBackofficeCtrl'});
    $routeProvider.when('/roomsBackoffice', {templateUrl: 'views/private/roomsBackoffice.html', controller: 'RoomBackofficeCtrl'});
    $routeProvider.otherwise({redirectTo: '/conferences'});
}]);
