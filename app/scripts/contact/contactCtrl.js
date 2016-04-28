angular.module('clientApp').controller('contactCtrl', ['apiService', function (apiService) {
    var self = this;

    self.name = "";
    self.email = "";
    self.subject = "";
    self.message = "";

    self.submit = function() {
        var landingUrl = "http://" + $window.location.host + "/#/emailConfirm";
        $window.location.href = landingUrl;

        var payload = {
          "name": self.name,
          "email": self.email,
          "subject": self.subject,
          "message": self.message
        }
    }
}]);
