describe("Event Service", function(){
    var svc = null
    var http = null

    beforeEach(function(){
        module("NoodleIncident")
        inject(function($httpBackend, Events){
            http = $httpBackend
            svc = Events
        })
    })

    afterEach(function() {
        http.verifyNoOutstandingExpectation();
        http.verifyNoOutstandingRequest();
    });

    it('should have a query function', function () {
        expect(angular.isFunction(svc.query)).toBe(true);
    });

    it('should call /events when you query', function(){
        //TODO: Create event fixtures
        data = [{name: "Warmachine Tournament", location: "Guardian Games"}]
        http.expectGET('/events').respond(data)

        svc.query().then(function(svcdata){
            expect(svcdata.length).toEqual(data.length)
            expect(svcdata[0].name).toEqual(data[0].name)
            expect(svcdata[0].location).toEqual(data[0].location)
        })

        http.flush()
    })

})
