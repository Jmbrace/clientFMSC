angular.module('clientApp').controller('contactCtrl', ['apiService', '$window', function (apiService, $window) {
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
