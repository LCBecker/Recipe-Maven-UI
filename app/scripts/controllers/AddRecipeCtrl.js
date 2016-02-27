'use strict';

/**
 * @ngdoc function
 * @name recipeMavenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeMavenApp
 */
angular.module('recipeMavenApp')
  .controller('AddRecipeCtrl', function ($http) {
    var vm = this;
    vm.recipe = {
      name: '',
      servings: 0,
      ingredients: [{
        name: '',
        amount:'',
        unit:'',
        description:''
      }]
    };

    vm.appendIngredient = function() {
      vm.recipe.ingredients.push({
          name: '',
          amount:'',
          unit:'',
          description:''
      });
    };

    vm.addRecipe = function() {
      //vm.recipe = recipe;
      console.log(vm.recipe);
      //var json = angular.toJson(vm.recipe);
      // console.log(vm.recipe);
      $http.post('http://localhost:8080/recipes', vm.recipe).then(function(){
        console.log('Added!');
      });
    };
  });
