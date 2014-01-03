angular.module("NoodleIncident.controllers").controller("eventEntryCtrl", function($scope, Events, $location){
    $scope.save_new_event = function(){
        //todo: Handle failure better
        new Events($scope.newEventForm).create().then(function(){
            $scope.emit("alert", {type: "success", msg:"Created the event!"})
            $location.path("/")
        },function(){
            $scope.emit("alert", {type: "warning", msg:"Whoops! Failed to create the event!"})
        })
    }
})