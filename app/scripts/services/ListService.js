'use strict';

var app = angular.module('recipeMavenApp');

app.service('listService', function() {

  var list = {};

  var createList = function(selected, recipes) {
    list = {};
    for (var i = 0; i < selected.length; i++) {
      // Get ingredients of this recipe.
      var ingredients = recipes[selected[i]].ingredients;
      for (var j = 0; j < ingredients.length; j++) {
      // If ingredient already in list, just add amount and unit.
        if(list[ingredients[j].name]) {
          console.log('ingredient is in the list');
          list[ingredients[j].name] += ' + ' + ingredients[j].amount + ' ' + ingredients[j].unit + ' ' + ingredients[j].description;
        } else { // Else add ingredient to list.
          list[ingredients[j].name] = ingredients[j].amount + ' ' + ingredients[j].unit + ' ' + ingredients[j].description;
        }
      }
    }
    console.log(list);
  };

  var getList = function() {
    return list;
  };

  return {
    createList: createList,
    getList: getList
  };

});
