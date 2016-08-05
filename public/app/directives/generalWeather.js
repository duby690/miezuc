(function() {

  angular
    .module('app')
    .directive('generalWeather', generalWeather);

  generalWeather.$inject = ['$http'];

  function generalWeather($http) {
    console.log('post Details Loaded');
    return {
      templateUrl: 'app/partials/generalWeather.html',
      link: function(scope) {
        scope.change = function() {
          console.log(scope.city);
          var myUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + scope.city + '&units=metric&APPID=e172458e0763cbf1d014e6d00427937a';

          var req = {
            method: 'GET',
            url: myUrl
          }

          scope.weatherDesc = "";
          scope.weatherTemp = "";

          $http(req).then(function(res){
            scope.weatherDesc += res.data.weather[0].description;
            scope.weatherTemp += res.data.main.temp;
            console.log(res.data);
          }, function(){});
          console.log(scope);
          scope.options = {
            types: ['(cities)'],
            componentRestrictions: { country: 'FR' }
          };

          scope.address = {
            name: '',
            place: '',
            components: {
              placeId: '',
              streetNumber: '',
              street: '',
              city: '',
              state: '',
              countryCode: '',
              country: '',
              postCode: '',
              district: '',
              location: {
                lat: '',
                long: ''
              }
            }
          };
          console.log(scope.city);
          if (scope.city !== 0 ) {
            console.log(scope.city);
          }
        }

      }
    };
  }
}());
