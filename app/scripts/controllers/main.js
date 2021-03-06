'use strict';

/**
 * @ngdoc function
 * @name recipeMavenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeMavenApp
 */
angular.module('recipeMavenApp')
  .controller('MainCtrl', function ($location) {
    var vm = this;
    vm.title = 'Recipe Maven';

    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
