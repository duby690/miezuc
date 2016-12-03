( function() {
'use strict';

angular
  .module('app', [
    'ngAnimate',
    'ui.bootstrap',
    'ngTagsInput',
    'ngSanitize',
    'ui.router',
    'ui.select',
    'ngTable',
    'vsGoogleAutocomplete'
  ]);
})();

$(document).ready(function() {
  $(document).on('click', '.get-user', function() {
        $.ajax({
            url: 'https://miezuc.kohezion.com/k_application.jsp?firstTime=true',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log(data);
                var userInfo = data.employees[0];
                console.log(userInfo);
                $('.user').append('<h5>' + userInfo.firstName + " " + userInfo.lastName + '</h5>').show('slow');
                // console.log(data);
            }
        });
    });

    $(document).on('click', '.add-user', function() {
        var newUser = {name: "Gica"};
          $.ajax({
              url: 'app/user.json',
              type: 'POST',
              contentType : 'application/json',
              data: newUser,
              dataType: 'json',
              success: function(data){
                  console.log(data);
              }
          });
      });
});
