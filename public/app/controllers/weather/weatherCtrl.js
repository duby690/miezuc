(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['$scope'];

  function WeatherCtrl($scope) {
    console.log("Hello from weather ctrl");
  }
}());
