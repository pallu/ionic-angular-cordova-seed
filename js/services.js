angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})
.factory('LoaderService', function ($rootScope, $ionicLoading) {

    // Trigger the loading indicator
    return {
        show: function () { //code from the ionic framework doc

            // Show the loading overlay and text
            $rootScope.loading = $ionicLoading.show({

                // The text to display in the loading indicator
                content: 'Loading',
                //content: '<i class="ion-loading-c"></i>',

                // The animation to use
                animation: 'fade-in',

                // Will a dark overlay or backdrop cover the entire view
                showBackdrop: true,

                // The maximum width of the loading indicator
                // Text will be wrapped if longer than maxWidth
                maxWidth: 200,

                // The delay in showing the indicator
                showDelay: 500
            });
        },
        hide: function () {
            $rootScope.loading.hide();
        }
    }
})
.factory('accountService', function ($http, $q) {
    var accountServiceAPI = {};
    var d = $q.defer();

    accountServiceAPI.login = function (UserName, Password, callback) {
        return $http.post(
                  basePortalUrl + "Account/AjaxLogOn",
                  { UserName: UserName, Password: Password, RememberMe: false })
            .then(
                //success
                function (res) {
                    return JSON.parse(res.data);
                    d.resolve();
                },
                //fail
                function () {
                    d.reject();
                }
                );
        return d.promise;
    };
    accountServiceAPI.logout = function () {
        return $http.get(basePortalUrl + "Account/AjaxLogOff")
            .then(
                //success
                function (res) {
                    return JSON.parse(res.data);
                    d.resolve();
                },
                function () { d.reject(); } //error
                );
        return d.promise;
    };

    return accountServiceAPI;
})
.factory('emsEventsService', function ($http, $q) {
    var emsEventsServiceAPI = {};
    var d = $q.defer();
    debugger;
    emsEventsServiceAPI.getAttendeesListByEventStatus = function (StatusType) {
        return $http.post(
                basePortalUrl + "EmsEvents/GetAttendeesListByEventStatus",
                { StatusType: StatusType }
            ).then(
                function (res) {
                    //debugger;
                    return res.data;
                    d.resolve();
                },
                //fail
                function () {
                    d.reject();
                }
            );
        return d.promise;
    };
    return emsEventsServiceAPI;
})
;
