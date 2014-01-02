describe("eventSearchCtrl", function(){
    var $scope = null
    var ctrl = null
    var q = null
    var deferred = null

    var eventMock = {
        query: function(queryString){
            deferred = q.defer()
            return deferred.promise
        },
        resolve: function(obj){
            deferred.resolve(data)
            $scope.$apply()
        }
    }


    beforeEach(module('NoodleIncident'))
    beforeEach(inject(function($rootScope, $controller, $q) {
        //create a scope object for us to use.
        $scope = $rootScope.$new()
        q = $q

        //now run that scope through the controller function,
        //injecting any services or other injectables we need.
        ctrl = $controller('eventSearchCtrl', {
            $scope: $scope,
            Events: eventMock
        })
    }))

    it("should start with an empty array for $scope.events", function(){
        expect($scope.events).toEqual([])
    })

    it("should have $scope.events populated when the promise resolves", function(){
        expect($scope.events).toEqual([])
        data = [{name: "High Command Tournament", location: "Guardian Games"}]
        eventMock.resolve(data)
        expect($scope.events).toEqual(data)
    })

})
