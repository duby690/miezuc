(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['$scope', '$http'];

  function WeatherCtrl($scope, $http) {
    console.log("Hello from weather ctrl");
    
  }
}());
