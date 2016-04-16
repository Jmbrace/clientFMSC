angular.module('clientApp').controller('logoutCtrl', ['authService', function (authService) {
console.log("In here");
    this.logout = function(){
    	authService.logout();
    }

    this.logout();
  }]);