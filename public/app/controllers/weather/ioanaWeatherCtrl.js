(function() {
  'use strict';

  angular
    .module('app')
    .controller('IoanaWeatherCtrl', IoanaWeatherCtrl);

  IoanaWeatherCtrl.$inject = ['$scope', '$http'];

  function IoanaWeatherCtrl($scope, $http) {
    //aici scriem codul js pt pagina ioanaweather
    $(document).on('click', '.get-weather-button', function() {
        var apiKey = "&units=metric&APPID=e172458e0763cbf1d014e6d00427937a";
        var getCity = $(".get-city").val();
        var myUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + getCity + apiKey;

        if (getCity.length === 0) {
            $(".error-message").show();
            $(".error-message").text("Please enter a city");
            $('.weather-item').hide();
        }

        $.ajax({
            url: myUrl,
            type:"GET",
            dataType: "json",
            success: function(res){
                console.log(res);
                $(".error-message").hide();
                $('.extended-weather').html("");
                $(".city-name b").text(res.city.name);
                $(".max-temp b").text(res.list[0].temp.max);
                $(".min-temp b").text(res.list[0].temp.min);
                $(".weather-image-first").attr("src", "http://openweathermap.org/img/w/" + res.list[0].weather[0].icon + ".png");
                var items = "";
                for (var i = 1; i < res.list.length; i++) {
                    console.log(res.list[i]);
                    items += "<div class='col-sm-2'>" +
                        "<p class='extended-max'>Max temp: <span>" + res.list[i].temp.max + "</span></p>" +
                        "<p class='extended-min'>Min temp: <span>" + res.list[i].temp.min + "</span></p>" + "<img src=" + "http://openweathermap.org/img/w/" + res.list[i].weather[0].icon + ".png" + ">" +
                        "<i>" + res.list[i].weather[0].description + "</i>" +
                    "</div>";
                }
                $('.extended-weather').html(items);
                //
                // $(".first-day .extended-max span").text(res.list[1].temp.max);
                // $(".first-day .extended-min span").text(res.list[1].temp.min);
                // $(".first-day .weather-image").attr("src", "http://openweathermap.org/img/w/" + res.list[1].weather[0].icon + ".png");
                //
                //
                // $(".second-day .extended-max span").text(res.list[1].temp.max);
                // $(".second-day .extended-min span").text(res.list[1].temp.min);
                // $(".second-day .weather-image").attr("src", "http://openweathermap.org/img/w/" + res.list[2].weather[0].icon + ".png");
                //
                // $(".third-day .extended-max span").text(res.list[2].temp.max);
                // $(".third-day .extended-min span").text(res.list[2].temp.min);
                // $(".third-day .weather-image").attr("src", "http://openweathermap.org/img/w/" + res.list[3].weather[0].icon + ".png");
                //
                // $(".fourth-day .extended-max span").text(res.list[3].temp.max);
                // $(".fourth-day .extended-min span").text(res.list[3].temp.min);
                // $(".fourth-day .weather-image").attr("src", "http://openweathermap.org/img/w/" + res.list[4].weather[0].icon + ".png");
                //
                // $(".five-day .extended-max span").text(res.list[4].temp.max);
                // $(".five-day .extended-min span").text(res.list[4].temp.min);
                // $(".five-day .weather-image").attr("src", "http://openweathermap.org/img/w/" + res.list[5].weather[0].icon + ".png");
                //
                // $(".six-day .extended-max span").text(res.list[5].temp.max);
                // $(".six-day .extended-min span").text(res.list[5].temp.min);
                // $(".six-day .weather-image").attr("src", "http://openweathermap.org/img/w/" + res.list[6].weather[0].icon + ".png");

                $(".weather-item").slideDown("slow");
            }
        })
    });
  }
}());
