angular.module("NoodleIncident.controllers").controller("alertCtrl", function($scope, $rootScope){
    $scope.alerts = []

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
    $rootScope.$on("alert",function(event,alert){
        $scope.alerts.push(alert)
    })
})