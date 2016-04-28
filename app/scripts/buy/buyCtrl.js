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

    //console.log(brnForm.payment_method_nonce.value);

    getToken();

    function getToken()
    {
        $http.get("https://fmsc-server.herokuapp.com/api/payments/1").then(function(response){
            $scope.token = response.data.token;

            // set up braintree now with this token
            braintree.setup($scope.token, "dropin", {
                container: "payment-form",
                id: "checkout",
                onPaymentMethodReceived: function(payload) {
                    nonce = payload.nonce; // yay
                }
            });
        });
    }

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
    
  }]);
