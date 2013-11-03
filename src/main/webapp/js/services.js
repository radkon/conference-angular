'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
    value('version', '0.1').
    factory('ConferenceService', ['$resource', function($resource){
        var baseUrl = '/conference/rest/conference/_findAll';
        return {
            save : function(conference, successCallback) {
                var Conference = $resource('/conference/rest/conference');
                Conference.save(conference, successCallback);
            },
            readAll : function() {
                var Conference = $resource(baseUrl + '/:conferenceId', {conferenceId:'@id'});
                return Conference.query();
            }
        };
    }]);

