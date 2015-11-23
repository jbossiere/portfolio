// Initializes the angular app
var app = angular.module('myApp', ['ui.router', 'ui.materialize']);


// Configure app to give separate controllers for the various html fragment/templates
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
			controller: "AboutController"
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
});

// Creates a controller for the home fragment/template, then parses through a csv file to get data
// to show on the page
app.controller('HomeController', function($scope, $http){

	Papa.parse("../data/home.csv", {
		download: true,
		header: true,
		complete: function(results) {
			console.log(results);
			$scope.projects = results.data;
			// for (i  = 0; i < results.data.length; i++) {
			// 	Papa.parse(results.data[i].tags, {
			// 		complete: function(results) {
			// 			console.log(results)
			// 			console.log(results.data);
			// 		}
			// 	});
			// };
		}
	});


	// $scope.animation = function(project) {
	// 	$attr('src', 'project.imgUrl')
	// };


});

// Creates a controller for the about fragment/template
app.controller('AboutController', function($scope, $http){
	$scope.name = 'Julian Bossiere';
});

// Creates a controller for the contact fragment/template
app.controller('ContactController', function($scope, $http){
	$scope.email = "julianbossiere@gmail.com";
});

