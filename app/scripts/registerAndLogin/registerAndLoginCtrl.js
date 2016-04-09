angular.module('clientApp')
  .controller('registerAndLoginCtrl', ['authService', function (authService) {
  	this.password = "";
  	this.passwordConfirmation = "";
  	this.email = "";
    this.firstName = "";
    this.lastName = "";
  	this.data = {"loading": false};

    this.login = function(){
    	this.data.loading = true;
    	var payload = {
    		"session": {
    			"email": this.email,
    			"password": this.password,
    		}
    	}
    	authService.login(payload, this.data);
    }
    this.signUp = function(){
    	this.data.loading = true;
    	var payload = {
    		"user": {
    			"email": this.email,
    			"password": this.password,
    			"password_confirmation": this.password_confirmation
    		}
    	}
    	authService.signUp(payload, this.data);
    }
  }]);
