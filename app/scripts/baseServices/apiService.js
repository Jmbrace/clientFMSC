angular.module('clientApp').service('apiService',['$http', function($http){
	var urlBase = 'https://fmsc-server.herokuapp.com/api/';

	//This is for creating user accounts
	this.createUser = function(user){
		return $http.post(urlBase+ 'users', user);
	}

	this.updateUser = function(){

	}

	this.deleteUser = function(){

	}

	this.getUser = function(){

	}

	this.signIn = function(session){
		return $http.post(urlBase+ 'sessions', session);
	}

	this.signOut = function(authToken){
		return $http.delete(urlBase+ 'sessions/'+ authToken);
	}
}] );