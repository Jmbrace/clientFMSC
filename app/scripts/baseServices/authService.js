angular.module('clientApp').service('authService', ['apiService', '$window', function(apiService, $window){


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
			$window.localStorage['authToken'] = response.auth_token;
			console.log("signed in.")
			disableButton.loading = false;
		});
	}

	this.signUp = function(user, disableButton){
		apiService.createUser(user).then(function(response){
			$window.localStorage['authToken'] = response.auth_token;
			console.log("signed up.")
			disableButton.loading = false;
		});
	}
	this.logout = function() {
		apiService.signOut($window.localStorage['authToken']).then(function(response){
			$window.localStorage.removeItem('authToken');
			console.log("logged out.");
		});
	}
}]);