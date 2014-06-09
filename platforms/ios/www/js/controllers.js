angular.module('starter.controllers', [])

/**
 * App
 */

.controller('AppCtrl', function($scope) {

  $scope.plugins = [
    {
      name: 'Camera',
      slug: 'camera'
    },
    {
      name: 'Device',
      slug: 'device'
    },
    {
      name: 'Geo Location',
      slug: 'geo-location'
    },
    {
      name: 'Barcode Scanner',
      slug: 'barcode-scanner'
    },
    {
      name: 'Compass',
      slug: 'compass'
    },
    {
      name: 'Device Motion',
      slug: 'device-motion'
    },
    {
      name: 'Contacts',
      slug: 'contacts'
    },
    {
      name: 'Network',
      slug: 'network'
    },
    {
      name: 'Vibration',
      slug: 'vibration'
    },
    {
      name: 'Splash Screen',
      slug: 'splash-screen'
    }
  ];

})

/**
 * Home
 */

.controller('HomeCtrl', function($scope) {

})

/**
 * Camera
 */

.controller('CameraCtrl', function($scope, $cordovaCamera, $stateParams) {

  $scope.takePhoto = function() {

    // See all the possible Camera options from the Camera docs:
    // https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions
    var options = {
      quality: 100,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(
      function(image) {
        $scope.photo = image;
      },
      function(err) {
        $scope.err = err;
      }
    );
  };

  $scope.cleanup = function() {
    // @todo
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
    $cordovaBarcodeScanner.scan().then(
      function(result) {
        $scope.barcode = result;
        $scope.err = undefined;
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

    $cordovaDeviceOrientation.watchHeading(options).then(
      function() {
        // Not currently used
      },
      function(err) {
        $scope.err = err;
      },
      function(position) {
        $scope.position = position;
      }
    );

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




