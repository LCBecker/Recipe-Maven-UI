'use strict';

/**
 * @ngdoc function
 * @name recipeMavenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeMavenApp
 */
angular.module('recipeMavenApp')
  .controller('CreateListCtrl', function ($http, listService, $location) {
    var vm = this;
    vm.recipes = [];
    vm.recipeMap = {};

    $http.get('http://localhost:8080/recipes').then(function(data) {
      for (var i = 0; i < data.data.recipes.length; i++) {
        vm.recipes.push(JSON.parse(data.data.recipes[i]));
      }
      for (var j = 0; j < vm.recipes.length; j++) {
        vm.recipeMap[vm.recipes[j].name] = vm.recipes[j];
      }

    });

    vm.createList = function() {
      var selectedRecipes = Object.keys(vm.selected);
      listService.createList(selectedRecipes, vm.recipeMap);
      $location.path('/list');
    };

});
