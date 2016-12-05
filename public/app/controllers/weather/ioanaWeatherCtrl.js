(function() {
  'use strict';

  angular
    .module('app')
    .controller('IoanaWeatherCtrl', IoanaWeatherCtrl);

  IoanaWeatherCtrl.$inject = ['$scope', '$http'];

  function IoanaWeatherCtrl($scope, $http) {
    //aici scriem codul js pt pagina ioanaweather

    $(".get-city").keydown(function(keypressed){
      if(keypressed.which===13){
          $(".get-weather-button").trigger("click");
      }
   });

    $(document).on('click', '.get-weather-button', function() {
        var apiKey = "&units=metric&APPID=e172458e0763cbf1d014e6d00427937a";
        var getCity = $(".get-city").val();
        var myUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + getCity + apiKey;

        if (getCity.length === 0) {
            $(".error-message").show();
            $(".error-message").text("Please enter a city");
            $('.weather-item').hide();
            $(".reset").hide();
            return;
        }

        $.ajax({
            url: myUrl,
            type: "GET",
            dataType: "json",
            success:function(data){
                console.log("first call:", data);
                var dateString = moment.unix(data.dt).format("dddd");
                $(".city-name b").text(data.name);
                $(".country-code").text(data.sys.country);
                $(".max-temp b").text(data.main.temp_max + "° C");
                $(".min-temp b").text(data.main.temp_min + "° C");
                $(".current-temp b").text(data.main.temp + "° C");
                $(".humidity b").text(data.main.humidity);
                $(".pressure b").text(data.main.pressure);
                $(".wind b").text(data.wind.speed + " kph");
                $(".main-weather").text(data.weather[0].main);
                $(".weather-image-first").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                $(".weather-item").fadeIn();
                $(".error-message").hide();
                $(".reset").show();
                $(".weekday b").text(dateString);
                setTimeout(function(){
                  $(".right-main-weather").fadeIn();
              }, 2500);
            },
            error: function(eroare) {
                $(".error-message").show();
                $(".weather-item").fadeOut();
                $(".error-message").text(eroare.statusText);
            }
        });

            var myUrl2= "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + getCity + apiKey;

        $.ajax({
            url: myUrl2,
            type: "GET",
            dataType:"json",
            success:function(res){
                console.log("second-call:", res);
                var weatherExtended = "";
                for( var i = 1; i < res.list.length; i++ ){
                    var dateString2 = moment.unix(res.list[i].dt).format("ddd");
                     weatherExtended +="<div class='col-sm-2 col-xs-6'><span><b>" + dateString2 + "</b></span><img src=" + "http://openweathermap.org/img/w/" + res.list[i].weather[0].icon + ".png" + ">" + "<p class='extended-max'>Max temp: <span>" + res.list[i].temp.max + "° C</span><p class='extended-min'>Min temp: <span>" + res.list[i].temp.min + "° C</span></p></div>";
                 }

                 $(".extended-weather").html(weatherExtended);
            }
        })
//I ADDED A CLICK EVENT  ON  RESET BUTTON
        $(".reset").click( function(){
            $(".weather-item").fadeOut();
            $(this).hide();
            $("input").val("");
            $("input").focus();
        })
    });
  }
}());
