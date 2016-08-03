(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$window'];

  function AppCtrl($scope, $window) {
      console.log('Hello Miezuc!');
      $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });
    };
}());
