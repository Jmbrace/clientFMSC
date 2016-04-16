angular.module('clientApp').service('authService', ['apiService', '$window', function(apiService, $window){

	var self = this;
	var currentUser;
		//TODO ADD ERROR PROMISES
	this.loggedIn = function(){
		if($window.localStorage['authToken']){
			return true;
		}
		else{
			return false;
		}
	}
	this.login = function(session, disableButton){
		apiService.signIn(session).then(function(response){
			$window.localStorage['authToken'] = response.data.auth_token;
			console.log("signed in")
			currentUser = response.data;
			disableButton.loading = false;
			console.log(self.currentUser)
			$window.location.href = '#/';
		});
	}

	this.signUp = function(user, disableButton){
		apiService.createUser(user).then(function(response){
			$window.localStorage['authToken'] = response.data.auth_token;
			console.log("signed up.")
			currentUser = response.data;
			disableButton.loading = false;
			$window.location.href = '#/';
		});
	}
	this.logout = function() {
		apiService.signOut($window.localStorage['authToken']).then(function(response){
			$window.localStorage.removeItem('authToken');
			currentUser = {};
			console.log("logged out.");
			$window.location.href = '#/';
		});
	}
	this.getUser = function(){
		return currentUser;
	}
}]);