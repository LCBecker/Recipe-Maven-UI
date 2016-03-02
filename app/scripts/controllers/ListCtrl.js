'use strict';

/**
 * @ngdoc function
 * @name recipeMavenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeMavenApp
 */
angular.module('recipeMavenApp')
  .controller('ListCtrl', function (listService) {
    var vm = this;
    vm.ingredients = listService.getList();
    console.log(vm.ingredients);
    console.log(Object.keys(vm.ingredients));
    
  });
