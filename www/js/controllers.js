angular.module('starter.controllers', [])

/**
 * App
 */

.controller('AppCtrl', function($scope) {
})

/**
 * Home
 */

.controller('HomeCtrl', function($scope) {

})

/**
 * Camera
 */

.controller('CameraCtrl', function($scope, $stateParams) {

  $scope.takePhoto = function() {

  };

  $scope.cleanup = function() {

  };

})

/**
 * Device
 */

.controller('DeviceCtrl', function($scope, $cordovaDevice, $stateParams) {

  $scope.device = {
    cordova: $cordovaDevice.getCordova(),
    model: $cordovaDevice.getModel(),
    platform: $cordovaDevice.getPlatform(),
    uuid: $cordovaDevice.getUUID(),
    version: $cordovaDevice.getVersion()
  };

})

/**
 * Geo Location
 */

.controller('GeoLocationCtrl', function($scope, $cordovaGeolocation, $stateParams) {

    $cordovaGeolocation.getCurrentPosition().then(
      function(position) {
        $scope.position = position;
        $scope.err = undefined;
      },
      function(err) {
        $scope.err = err;
      }
    );

    $cordovaGeolocation.watchPosition().then(
      function() {
        // Not currently used
      },
      function(err) {
        // An error occured. Show a message to the user
        $scope.err = err;
      },
      function(position) {
        $scope.position = position;
        $scope.err = undefined;
      }
    );

})

/**
 * Barcode Scanner
 */

.controller('BarcodeScannerCtrl', function($scope, $cordovaBarcodeScanner, $stateParams) {

  $scope.scan = function() {
    $scope.err = 'clicked';
    $cordovaBarcodeScanner.scan().then(
      function(result) {
        $scope.barcode = result;
        //$scope.err = undefined;
      },
      function(err){
        $scope.err = err;
      }
    );
  };

})

/**
 * Compass
 */

.controller('CompassCtrl', function($scope, $cordovaDeviceOrientation, $stateParams) {

  $scope.load = function() {
    var options = {
      frequency: 1000
    };
    $cordovaDeviceOrientation.watchHeading(options).then(function() {
      // Not currently used
    }, function(err) {
      $scope.err = err;
    }, function(position) {
      $scope.position = position;
    });
  };

  $scope.load();

})

/**
 * Device Motion
 */

.controller('DeviceMotionCtrl', function($scope, $cordovaDeviceMotion, $stateParams) {

  $scope.load = function() {
    var options = {
      frequency: 1000
    };
    $cordovaDeviceMotion.watchAcceleration(options).then(
      function() {
        // noop
      },
      function(err) {
        $scope.err = err;
      },
      function(acceleration) {
        $scope.acceleration = acceleration;
        //$scope.err = undefined;
      }
    );
  };

  $scope.load();

})

/**
 * Contacts
 */

.controller('ContactsCtrl', function($scope, $stateParams) {

  // Contacts

})

/**
 * Network
 */

.controller('NetworkCtrl', function($scope, $cordovaNetwork, $stateParams) {

  $scope.load = function() {
    $scope.connection = {
      type: $cordovaNetwork.getNetwork(),
      isOnline: $cordovaNetwork.isOnline()
    }
  };

  $scope.load();

})

/**
 * Vibration
 */

.controller('VibrationCtrl', function($scope, $cordovaVibration, $stateParams) {

  $scope.vibrate = function() {
    $cordovaVibration.vibrate(100);
  };

})

/**
 * Splash Screen
 */

.controller('SplashScreenCtrl', function($scope, $cordovaSplashscreen, $timeout, $stateParams) {

  $scope.show = function() {
    $cordovaSplashscreen.show();
    $timeout(function() {
      $cordovaSplashscreen.hide();
    }, 1000);
  };

})




