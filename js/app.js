// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
var basePortalUrl = "http://celgene.tsgstage.com/";
var loggedIn = false;

//$(document).bind("mobileinit", function () {
//    // Make your jQuery Mobile framework configuration changes here!
//    $.support.cors = true;
//    $.mobile.allowCrossDomainPages = true;

//});
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    //enable CORS
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state("tab.main", {
        url: "/main",
        abstract: false,
        views: {
            'main-tab': {
                templateUrl: "templates/home.html"
            }
        }
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
      url: '/pets',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/adopt.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('tab.register', {
        url: '/register',
        views: {
            'main-tab': {
                templateUrl: 'templates/register.html',
                controller: 'registerCtrl'
            }
        }
    })
    .state('tab.ero',{
        url: '/ero',
        views: {
            'main-tab':{
                templateUrl: 'templates/ero.html',
                controller: 'eroCtrl'
            }
        }

    })
    .state('tab.account', {
        url: '/account',
        views: {
            'main-tab': {
                templateUrl: 'templates/account.html',
                controller: 'accountCtrl'
            }
        }

    })
    ;

  // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/tab/pets');
    //$urlRouterProvider.otherwise('/tab/main');
  $urlRouterProvider.otherwise('/tab/account');

});

