angular.module("NoodleIncident.controllers").controller("eventSearchCtrl", function($scope, Events){
    $scope.events = []
    Events.query().then(function(events){
        $scope.events = events
    })

    $scope.$watch("query", function(){
        Events.query({game: $scope.query}).then(function(events){
            angular.extend($scope.events, events)
        })
    })
})
