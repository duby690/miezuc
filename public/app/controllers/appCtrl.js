(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$window'];

  function AppCtrl($scope, $window) {
      console.log('Hello Miezuc!');

    
    };
}());
