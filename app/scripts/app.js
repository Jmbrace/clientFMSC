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
    'ngTouch',
    'ngGentle',
    '720kb.socialshare',
    'angularPayments'
  ])
  .config(function ($routeProvider, $windowProvider) {

    // angular payments: setup stripe
    var $window = $windowProvider.$get();
    $window.Stripe.setPublishableKey('pk_test_ZSnvkkGj3GgteQgdjKBypnGM');

    // setup routes
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
      .when('/buy', {
        templateUrl: 'scripts/buy/buy.html',
        controller: 'buyCtrl',
        controllerAs: 'buyCtrl'
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
      .when('/confirmation', {
        templateUrl: "scripts/confirmationPage/paymentConfirmation.html",
        controller: 'paymentConfirmationCtrl',
        controllerAs: 'paymentConfirmationCtrl',
      })
      .when('/contact', {
          templateUrl: "scripts/contact/contact.html",
          controller: 'contactCtrl',
          controllerAs: 'contactCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
