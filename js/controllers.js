angular.module('starter.controllers', [])

.controller('registerCtrl', function ($scope, $http,$ionicLoading, emsEventsService, LoaderService) {
    //controllers.registerCtrl = function ($scope, $http, emsEventsService) {
    debugger;
    $scope.show_section = {};
    $scope.icon_section = {};
    $scope.events = [];
    $scope.section_click = function (section, $event) {
        $scope.show_section[section] = !$scope.show_section[section];
        $scope.icon_section[section] = $scope.show_section[section] ? "ion-ios7-minus" : "ion-ios7-plus";
        $scope.$broadcast('scroll.resize');
    };
    $scope.getAttendeesListByEventStatus = function () {
        //debugger;
        LoaderService.show();

        // add action here...

        
        emsEventsService.getAttendeesListByEventStatus("17").then(
            function (res) {
                if (res) {
                    for (var i = 0; i < res.length; i++) {
                        $scope.icon_section[res[i].EventJobNumber] = "ion-ios7-plus";
                    }
                    $scope.events = res;
                };
                // Hide overlay when done
                LoaderService.hide();
            }
            );
    };
    
    //$scope.getAttendeesListByEventStatus();
})
//.controller('accountCtrl', function($scope, $http, $state, accountService) {
.controller('accountCtrl', function ($scope, $state, accountService) {
    //controllers.accountCtrl = function($scope, $http, accountService){
    debugger;
    $scope.success = false;
    $scope.UserName = '';
    $scope.Password = '';

    $scope.handleLogin = function (user,$event) {
        //debugger;
        if (user) {
            $scope.UserName = user.UserName;
            $scope.Password = user.Password;
        }
        var u = $scope.UserName;
        var p = $scope.Password;
        if (u != '' && p != '') {
            //debugger;
            var submitBtn = null;
            if($event)
                submitBtn = $event.target;
            if(submitBtn)
                submitBtn.setAttribute("disabled", "disabled");
            accountService.login(u, p).then(
                //success
                function (res) {
                    //debugger;
                    $scope.success = res;
                    if (res===true) {
                        window.localStorage["UserName"] = u;
                        window.localStorage["Password"] = p;
                        //$.mobile.changePage("#home");
                        $state.go('tab.main');
                    }
                    else {
                        navigator.notification.alert("Your login failed", function () { });
                    }
                    if (submitBtn)
                        submitBtn.removeAttribute('disabled');
                });
            
        };
    };

    $scope.handleLogout = function () {
        accountService.logout().then(
            function (res) {
                if (res) {
                    $scope.currentUser = null;
                    $.mobile.changePage("#loginPage");
                }

            }
            );
    };

    if (window.localStorage["UserName"] != undefined && window.localStorage["Password"] != undefined) {
        $scope.UserName = (window.localStorage["UserName"]);
        $scope.Password = (window.localStorage["Password"]);
        
        $scope.handleLogin();
    };

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
