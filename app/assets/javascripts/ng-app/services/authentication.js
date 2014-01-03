angular.module('NoodleIncident.services').factory('Authentication', function (railsResourceFactory, $rootScope, $location) {
    $rootScope.$on("authenticationFailed", function (event, data) {
        $rootScope.$broadcast("alert", {type: "warning", msg: data})
        $rootScope.authReturnPath = $location.path()
        $location.path("/authentication")
    })

    var auth = railsResourceFactory({url: "/auth", name: "auth"})

    auth._user = null

    auth.getUser = function () {
        if(auth._user){
            return auth._user
        }

        auth.query().then(
            function (data) {
                auth._user = data
                return auth._user
            },
            function (failed_auth) {
                $rootScope.$broadcast("authenticationFailed", "Login failed")
                return
            }
        )
    }

    auth.mustHaveRole = function (userRole) {
        if (auth._user.role != userRole)
            $rootScope.$broadcast("authenticationFailed", "I'm sorry, you are not a " + userRole)
    }

    return auth;
})

//Broadcast to individual controllers that we've failed auth
angular.module('NoodleIncident.services').config(function ($httpProvider) {
    $httpProvider.responseInterceptors.push(
        function ($q, $rootScope) {
            return function (promise) {
                return promise.then(
                    function (response) {
                        return response
                    },
                    function (error_response) {
                        if (error_response.status === 401) {
                            $rootScope.$broadcast("authenticationFailed", "User logged out by server")
                        }
                        return $q.reject(error_response)
                    })
            }
        })
})