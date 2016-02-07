window.$ = require('jquery');
require('angular');
require('angular-route');
require('angular-animate');
var app = angular.module('myapp', ['ngRoute','ngAnimate']);
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'templates/profile.html'
    })
    .when('/skills',{
      templateUrl:'templates/skills.html'
    })
    .when('/experience',{
      templateUrl:'templates/jobs.html'
    })
    .when('/galery',{
      templateUrl:'templates/galery.html'
    })
    .when('/contact',{
      templateUrl:'templates/contact.html'
    })
    .when('/aboutme',{
      templateUrl:'templates/about.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
