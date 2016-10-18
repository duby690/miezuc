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
  $(document).on('click', 'button', function() {
    // $.ajax('/photos.html',{
    //   success: function(data){
    //   	$(".photos").html(data);
    //
    //   }
    // });
        $.ajax({
            url: 'app/user.json',
            type: 'get',
            dataType: 'json',
            success: function(data){
                var userInfo = data;
                $('.user').append('<h5>' + userInfo.employees[0].firstName + '</h5>').show('slow');
                console.log(data);
            }
        });
    });
});
