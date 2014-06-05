// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.camera', {
      url: '/camera',
      views: {
        'menuContent' :{
          templateUrl: 'templates/camera.html',
          controller: 'CameraCtrl'
        }
      }
    })
    .state('app.device', {
      url: '/device',
      views: {
        'menuContent' :{
          templateUrl: 'templates/device.html',
          controller: 'DeviceCtrl'
        }
      }
    })
    .state('app.geoLocation', {
      url: '/geo-location',
      views: {
        'menuContent' :{
          templateUrl: 'templates/geo-location.html',
          controller: 'GeoLocationCtrl'
        }
      }
    })
    .state('app.barcodeScanner', {
      url: '/barcode-scanner',
      views: {
        'menuContent' :{
          templateUrl: 'templates/barcode-scanner.html',
          controller: 'BarcodeScannerCtrl'
        }
      }
    })
    .state('app.compass', {
      url: '/compass',
      views: {
        'menuContent' :{
          templateUrl: 'templates/compass.html',
          controller: 'CompassCtrl'
        }
      }
    })
    .state('app.deviceMotion', {
      url: '/device-motion',
      views: {
        'menuContent' :{
          templateUrl: 'templates/device-motion.html',
          controller: 'DeviceMotionCtrl'
        }
      }
    })
    .state('app.contacts', {
      url: '/contacts',
      views: {
        'menuContent' :{
          templateUrl: 'templates/contacts.html',
          controller: 'ContactsCtrl'
        }
      }
    })
    .state('app.network', {
      url: '/network',
      views: {
        'menuContent' :{
          templateUrl: 'templates/network.html',
          controller: 'NetworkCtrl'
        }
      }
    })
    .state('app.vibration', {
      url: '/vibration',
      views: {
        'menuContent' :{
          templateUrl: 'templates/vibration.html',
          controller: 'VibrationCtrl'
        }
      }
    })
    .state('app.splashScreen', {
      url: '/splash-screen',
      views: {
        'menuContent' :{
          templateUrl: 'templates/splash-screen.html',
          controller: 'SplashScreenCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

