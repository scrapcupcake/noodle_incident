angular.module("NoodleIncident").config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('eventSearch', {
            url: "/",
            templateUrl: "ng-app/templates/eventSearch.html",
            controller: "eventSearchCtrl",
        }).state('eventEntry', {
            url: "/entry",
            templateUrl: "ng-app/templates/eventEntry.html",
            controller: "eventEntryCtrl",
            requiresRole: "Event Organizer"
        }).state('authentication', {
            url: "/authentication",
            templateUrl: "ng-app/templates/authentication.html",
            controller: "authenticationCtrl",
            login:true
        })
}).run(['$rootScope', 'Authentication', function ($rootScope, Authentication) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if(toState.requiresRole){
                event.preventDefault()
                Authentication.getUser()
                Authentication.mustHaveRole(toState.requiresRole)
            }else{
                console.log("Trying to access a public area")
            }
        });
    }]);


