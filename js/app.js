// Initializes the angular app
var app = angular.module('myApp', ['ui.router', 'ui.materialize']);

// Configure app to give separate controller for home, and separate templateUrls for the various html fragment/templates
app.config(function($stateProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: "templates/home.html",
			controller: "HomeController"
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
		})
});

// Creates a controller for the home fragment/template, then parses through a csv file to get data
// to show on the page
app.controller('HomeController', function($scope){
	Papa.parse("data/home.csv", {
		download: true,
		header: true,
		complete: function(results) {
			$scope.projects = results.data;
		}
	});
});
