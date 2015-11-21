// Initializes the angular app
var app = angular.module('myApp', ['ui.router', 'ui.materialize']);

// Configure app to give separate controllers for the various html fragment/templates
app.config(function($stateProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: "templates/home.html",
			controller: "HomeController"
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: "AboutController"
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
});

// Creates a controller for the home fragment/template
app.controller('HomeController', function($scope, $http){
	$scope.place = 'at the library.'
});

// Creates a controller for the about fragment/template
app.controller('AboutController', function($scope, $http){
	$scope.name = 'Julian Bossiere';
});

// Creates a controller for the contact fragment/template
app.controller('ContactController', function($scope, $http){
	$scope.email = "julianbossiere@gmail.com";
});

// https://docs.google.com/spreadsheets/d/1eanSlyrxYxTjJwotoHg25OGj1gNG_ieDkRdTJKiydts/edit#gid=0