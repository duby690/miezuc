(function() {
  'use strict';

  angular
    .module('app')
    .controller('GameCtrl', GameCtrl);

  GameCtrl.$inject = ['$scope', '$http'];

  function GameCtrl($scope, $http) {
      console.log("hi");
      var Game = function(canvasId) {
        var canvas = document.getElementById(canvasId);
        var screen = canvas.getContext('2d');
        var gameSize = {x: canvas.width, y: canvas.height};

        this.bodies = [new Player(this, gameSize)];
        console.log("hi");
        var self = this;
        var tick = function() {
          self.update();
          self.draw(screen, gameSize);
          requestAnimationFrame(tick);
        };
        tick();
      };

      Game.prototype = {
        update: function() {
          console.log("hi");
        },

        draw: function(screen, gameSize) {
          screen.fillRect(30, 30, 40, 40);
        }
      };

      var Player = function(game, gameSize) {
        this.game = game;
        this.size = {x: 15, y: 15};
        this.center = {x: gameSize.x / 2, y: gameSize.y - this.size.x};
      };

      Player.prototype = {
        update: function() {

        }
      };

      new Game("screen");
  }
}());
