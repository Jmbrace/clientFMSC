'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'scripts/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'scripts/registerAndLogin/login.html',
        controller: 'registerAndLoginCtrl',
        controllerAs: 'regNLog'
      })
      .when('/register', {
        templateUrl: 'scripts/registerAndLogin/register.html',
        controller: 'registerAndLoginCtrl',
        controllerAs: 'regNLog'
      })
      .when('/logout', {
        template: " ",
        controller: 'logoutCtrl',
        controllerAs: 'logoutCtrl'
      })
      .when('/profile', {
        templateUrl: "scripts/profile/profile.html",
        controller: 'profileCtrl',
        controllerAs: 'profileCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
