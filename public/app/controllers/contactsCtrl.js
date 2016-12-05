(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', '$http'];

  function ContactsCtrl($scope, $http) {


       $.ajax({
         url: 'https://contactos-afbe1.firebaseio.com/.json',
         type: "GET",

         success: function (res) {
             console.log("first call", res);
             $.each(res.users, function (index, value) {
                 //console.log("success", index);

                 //in value vin obiectele din backend
                 console.log("success", value);

                 //exemplu de cum afisam info in body
                 $("body").append("<span>" + value.name + " </span>");
             });
         },

         error: function(error) {
           alert("error: "+error);
         }

       });
       //
    //       var newUser =  {
    //           id: 3,
    //           name: "Razvan Dubau",
    //           phone: "inca nu am numar de tel",
    //           email: "are mami si tati"
    //       };
       //
    //       $.ajax({
    //         url: 'https://contactos-afbe1.firebaseio.com/users.json',
    //         type: "POST",
    //         data: JSON.stringify(newUser),
    //         success: function (res) {
    //           console.log(res);
    //         },
    //         error: function(error) {
    //           alert("error: "+error);
    //         }
    //    });
  }
}());
