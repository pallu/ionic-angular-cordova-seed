angular.module('starter.controllers', [])

.controller('registerCtrl', function ($scope, $http, emsEventsService) {
    //controllers.registerCtrl = function ($scope, $http, emsEventsService) {
    debugger;
    $scope.events = [];
    $scope.getAttendeesListByEventStatus = function () {
        //debugger;
        emsEventsService.getAttendeesListByEventStatus("17").then(
            function (res) {
                if (res)
                    $scope.events = res;
            }
            );
    };

    //$scope.getAttendeesListByEventStatus();
})
.controller('eroCtrl', function ($scope) {

})
// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
