window.$ = require('jquery');
require('angular');
console.log('aokdoadk');
console.log(angular);
var app = angular.module('landing_page', [require('angular-route'), require('angular-animate')]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../templates/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
});
