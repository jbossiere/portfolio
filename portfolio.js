// Initialize app
var app = angular.module('myApp', ['ui.router']);

// Configure app
app.config(function($stateProvider){
	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: "index.html",
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

app.controller('HomeController', function($scope, $http){

});

app.controller('AboutController', function($scope, $http){
	$scope.name = 'Julian Bossiere';
});

app.controller('ContactController', function($scope, $http){
	$scope.email = "julianbossiere@gmail.com";
});