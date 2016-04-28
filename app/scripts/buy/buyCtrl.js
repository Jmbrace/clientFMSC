'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('buyCtrl', ['apiService', '$scope', 'paragraph', '$window', '$http', function (apiService, $scope, paragraph, $window, $http) {

    // init bound vars
    $scope.name = "";
    $scope.meals = 20;
    $scope.state = "";
    $scope.message = "";
    $scope.badWord = false;
    $scope.disable = false;
    $scope.token = "";
    var nonce = "";

var clientToken = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIxOTk2MjUxNjM5NGI5ZThkNTNhNDI0MTZlZTNhMWJiZThjN2Y1NDU1NTBjZWFiZmVjNTllNWNjMGZiZmU2ZWQ1fGNyZWF0ZWRfYXQ9MjAxNi0wNC0yOFQwMjo1NjoxMC4zMTUxNTk4MzgrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=";

braintree.setup(clientToken, "dropin", {
  container: "payment-form",
  id: "checkout",
  onPaymentMethodReceived: function(payload) {
                nonce = payload.nonce; // yay
              }
});
    $scope.nsfwMessage =  function() {
        if (paragraph.isGentle($scope.message).length > 0) {
            $scope.badWord=true;
            $scope.disable = true;
        }
        else {
            $scope.badWord=false;
            $scope.disable = false;
        }
    }

    function getToken()
    {
        $http.get("https://fmsc-server.herokuapp.com/api/payments/1").then(function(response){
            $scope.token = response.token;
        });
    }

    // Stripe Response Handler
    $scope.stripeCallback = function (code, result) {
        if (result.error) {
            window.alert(result.error.message);
        } else {
            // window.alert(result.id);

            // KEEP THIS FOR ON VALID CALLBACK
            var landingUrl = "http://" + $window.location.host + "/#/confirmation";
            $window.location.href = landingUrl;

            var payload = {
              //
              "stripeToken": result.id,
              "numOfMeals": $scope.meals
            }
            //Make call to mark X pixels as 'in purchase', and set message
        }
    };


    $scope.purchase = function()
    { $scope.disable = true;
        var payload = {
            "payment_method_nonce": nonce,
            "amount": $scope.meals*0.25,
            "message":$scope.message,
            "numOfMeals":$scope.meals,
            "state":$scope.state
        };
       $http.post("https://fmsc-server.herokuapp.com/api/payments/", payload).then(function(response){
            console.log(response)
            $scope.disable = false;
             var landingUrl = "http://" + $window.location.host + "/#/confirmation";
            $window.location.href = landingUrl;
        });
    }
    getToken();
  }]);
