'use strict';

var roomModule = angular.module('modules.room', []);

roomModule.factory('Room', ['$resource', function ($resource) {
    return $resource('/conference/rest/room/:roomId', {roomId:'@id'})
}]);

roomModule.controller('module.room.ListController', ['$scope', 'Room', function ($scope, Room) {
    var loadRooms = function() {
        $scope.rooms = Room.query();
    };
    $scope.delete = function(room) {
        room.$delete(loadRooms);
    };
    loadRooms();
}]);

roomModule.controller('modules.room.CreateController', ['$scope', '$location', 'Room', function ($scope, $location, Room) {
    $scope.room = new Room();
    $scope.cancel = function () {
        $location.path('/room');
    };
    $scope.save = function () {
        $scope.room.$save(function() {
            $location.path('/room');
        });
    };
}]);

roomModule.controller('modules.room.EditController', ['$scope', '$routeParams', '$location', 'Room', function ($scope, $routeParams, $location, Room) {
    $scope.room = Room.get({roomId:$routeParams.roomId});
    $scope.cancel = function () {
        $location.path('/room');
    };
    $scope.save = function () {
        $scope.room.$save(function() {
            $location.path('/room');
        });
    };
}]);