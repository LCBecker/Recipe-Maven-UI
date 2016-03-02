'use strict';

/**
 * @ngdoc overview
 * @name recipeMavenApp
 * @description
 * # recipeMavenApp
 *
 * Main module of the application.
 */
angular
  .module('recipeMavenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add', {
        templateUrl: 'views/addRecipe.html',
        controller: 'AddRecipeCtrl',
        controllerAs: 'add'
      })
      .when('/create', {
        templateUrl: 'views/createList.html',
        controller: 'CreateListCtrl',
        controllerAs: 'create'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
