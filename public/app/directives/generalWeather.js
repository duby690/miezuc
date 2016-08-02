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
        var myUrl = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=e172458e0763cbf1d014e6d00427937a';

        var req = {
         method: 'GET',
         url: myUrl
        }
        scope.weatherOutside = "";

        $http(req).then(function(res){
          scope.weatherOutside += res.data.weather[0].main;
          console.log(res.data.weather[0].description);
          scope.wii = "The weather today is " + scope.weatherOutside;
        }, function(){});


      }
    };
  }
}());
