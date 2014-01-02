angular.module("NoodleIncident.services").factory('CoolThings',
    function(railsResourceFactory){
        return railsResourceFactory({
            url: "/cool-things",
            name: "coolThings"
        })
    })
