angular.module("NoodleIncident.services").factory('Events',
    function(railsResourceFactory){
        return railsResourceFactory({
            url: "/api/v1/events",
            name: "event"
        })
    })
