(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', '$http'];

  function ContactsCtrl($scope, $http) {
    $.ajax({
        url: "https://contactos-afbe1.firebaseio.com/",
        type:"GET",
        dataType: "json",
        success: function(res) {
          console.log(res);
        }
    })
  }
}());
