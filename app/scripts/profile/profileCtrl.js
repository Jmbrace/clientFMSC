angular.module('clientApp').controller('profileCtrl', ['apiService', 'authService', '$rootScope' ,function (apiService, authService, $rootScope){
	this.purchases = {};
	this.init = function(){
		$rootScope.isLoggedIn = authService.loggedIn;
		this.user = authService.getUser();
		console.log(this.user);
	}
	this.init();
}]);