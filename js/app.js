// Initializes the angular app
var app = angular.module('myApp', ['ui.router']);

// Configure app to give separate controller for home, and separate templateUrls for the various html fragment/templates
app.config(function($stateProvider, $locationProvider, $urlRouterProvider){
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
			controller: "ContactController"
		});

	$urlRouterProvider.when('', '/');
});

// Creates a controller for the home fragment/template, then parses through a csv file to get data
// to show on the page.  
// - $scope.mainUrl is used in the HTML to switch between static and gif image
// - $scope.$apply() is used because papa.parse is asynchronous and not angular, angular has it's own
// 	 event loop, but since papa.parse is not part of it, it doesn't automatically get updated with the 
// 	 rest of angular.  the $apply() tells angular to update for this controller
app.controller('HomeController', function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
	}); 

	Papa.parse("data/projects.csv", {
		download: true,
		header: true,
		complete: function(results) {
			$scope.projects = results.data;
			$scope.$apply();
		}
	});

	// $scope.goToProjects = function() {
	// 	console.log('ohhihello');
	// 	$location.hash("projects");
	// 	$anchorScroll();
	// };
});

app.controller("AboutController", function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
	}); 
});

app.controller("ContactController", function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
	}); 
});