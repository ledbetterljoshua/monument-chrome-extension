var myApp = angular.module('myAppExtension', []);

myApp.controller('AppCtrl', ['$scope', '$http', 
function($scope, $http) {
	console.log("Hello from the controller");

	var refresh = function(){
		$http.get('https://gentle-chamber-9551.herokuapp.com/api/posts').success(function(response) {
			console.log('I got the data! :D');
			$scope.posts = response;
			$scope.post = "";
		});
	}

	refresh();

	$scope.addPost = function() {
		console.log($scope.post + " is this working?");
		$http.post('https://gentle-chamber-9551.herokuapp.com/api/posts', $scope.post).success(function(response){
			console.log(response);
			refresh();
		});
	};
	$scope.remove = function(id) {
		console.log(id);
		$http.delete('https://gentle-chamber-9551.herokuapp.com/api/posts/' + id).success(function(response) {
			//refresh();
			console.log('success')
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('https://gentle-chamber-9551.herokuapp.com/api/posts/' + id).success(function(response) {
			$scope.post = response;
		});
	};

	$scope.update = function() {
		console.log($scope.post.id);
		$http.put('https://gentle-chamber-9551.herokuapp.com/api/posts/' + $scope.post._id, $scope.post).success(function(response) {
			refresh();
		});
	};
	
}]);



