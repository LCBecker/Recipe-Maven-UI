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
    vm.defaultRecipe = vm.recipe = {
      name: '',
      servings: 1,
      ingredients: [{
        name: '',
        amount:'',
        unit:'',
        description:''
      }]
    };

    vm.recipe = angular.copy(vm.defaultRecipe);
    vm.alerts = [];

    vm.closeAlert = function(index) {
      vm.alerts.splice(index, 1);
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
      if (!vm.recipe.name) {
        vm.alerts.push({type: 'danger', icon: 'glyphicon glyphicon-alert', head: 'Oops!', msg: 'Your recipe needs a name! Please try again.'});
      } else if (!vm.recipe.ingredients[0].name) { //TODO Add validation method.
        vm.alerts.push({type: 'danger', icon: 'glyphicon glyphicon-alert', head: 'Oops!', msg: 'Your recipe needs some ingredients! Please try again.'});
      } else {
        $http.post('http://localhost:8080/recipes/new', vm.recipe).then(function(){
          vm.alerts.push({type: 'success', icon: 'glyphicon glyphicon-ok-sign', head: 'Success!', msg: 'Your recipe has been added!'});
          vm.recipe = angular.copy(vm.defaultRecipe);
        }, function() {
          vm.alerts.push({type: 'danger', icon: 'glyphicon glyphicon-alert', head: 'Error!', msg: 'Your recipe was unable to be added. Please try again.'});
        });
      }
    };
  });
