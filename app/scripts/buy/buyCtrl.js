'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('buyCtrl', ['apiService', '$scope', 'paragraph', '$window', function (apiService, $scope, paragraph, $window) {

    // init bound vars
    $scope.name = "";
    $scope.meals = 20;
    $scope.state = "";
    $scope.message = "";
    $scope.badWord = false;

    console.log(brnForm.payment_method_nonce.value);


    $scope.nsfwMessage =  function() {
        if (paragraph.isGentle($scope.message).length > 0) {
            $scope.badWord=true;
        }
        else {
            $scope.badWord=false;
            console.log("In here");
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
              //
              "stripeToken": result.id,
              "numOfMeals": $scope.meals
            }
            //Make call to mark X pixels as 'in purchase', and set message
        }
    };

  }]);
