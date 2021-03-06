(function () {
  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$tooltipProvider', '$compileProvider',
             'tagsInputConfigProvider',
      function ($stateProvider, $urlRouterProvider, $tooltipProvider, $compileProvider,
                tagsInputConfigProvider) {
        //allow download of excel or ppt
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|blob):/);
        //allow dynamic tags
        tagsInputConfigProvider.setDefaults('tagsInput', { placeholder: '' });
        tagsInputConfigProvider.setActiveInterpolation('tagsInput', { placeholder: true });
        //ensure auth
        var tokenResolve = {
          token: ['$window', 'Utils', function($window, Utils) {
            var urls = Utils.getEnvVars().urls;

            return Utils.req.get(urls.getToken).then(function(res) {
              console.log('got the token', res);
              Utils.setToken(res.data);
            }, function(err) {
              console.log('err', err);
              return null;
            });
          }]
        };

        // $tooltipProvider.options({ appendToBody: true });
        $stateProvider
          // social base route
          .state('home', {
            url: '/',
            templateUrl: 'app/partials/home.html'
          })
          .state('weather', {
            url: '/weather',
            controller: 'WeatherCtrl',
            templateUrl: 'app/partials/weather.html'
          })
          .state('ioanaweather', {
            url: '/ioanaweather',
            controller: 'IoanaWeatherCtrl',
            templateUrl: 'app/partials/ioanaweather.html'
          })
          .state('game', {
            url: '/game',
            controller: 'GameCtrl',
            templateUrl: 'app/partials/game.html'
          })
          .state('contacts', {
            url: '/contacts',
            controller: 'ContactsCtrl',
            templateUrl: 'app/partials/contacts.html'
          })


        $urlRouterProvider.otherwise('/');

      }]).run(['$rootScope', function($rootScope) {
        $rootScope.menuState = {};
        $rootScope.$on('$stateChangeStart', function(event, toState) {
          $rootScope.menuState = toState;
        });
      }]);
}());
