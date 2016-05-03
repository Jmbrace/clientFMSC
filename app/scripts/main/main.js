'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['authService' , '$rootScope', '$http', function (authService, $rootScope, $http) {

  	var tooltipSpan = document.getElementById('tooltip-span');
	var message = document.getElementById('message');
	var windowWidth = window.innerWidth;
	var divPos = {};
	var offset = $("#imagehold").offset();

	

	$(document).mousemove(function(e) {
		var x = e.clientX - $('.imageHolder').offset().left;
		var y = e.clientY;

		divPos = {
			left: e.pageX - offset.left,
			top: e.pageY - offset.top
		};

		if (x < (windowWidth / 2)) {
			tooltipSpan.style.left = (x + 60) + 'px';
		}
		else {
			var divWidth = document.getElementById('tooltip-span').offsetWidth;
			tooltipSpan.style.left = (x - divWidth + 40) + 'px';
		}

		tooltipSpan.style.top = (y + 20) + 'px';

		// get correct message
		for (var i = messages.length - 1; i >= 0; i--) {
			if (messages[i].x1 <= divPos.left && messages[i].x2 >= divPos.left &&
				messages[i].y1 <= divPos.top && messages[i].y2 >= divPos.top) {
				message.innerHTML = "<p>" + messages[i].message + "</p>";
				break;
			}
			else {
				message.innerHTML = "<h4>Open</h4>";
			}
		}

		

	});

	$(document).ready(function(){	
		$(window).resize(function(){
			offset = $("#imagehold").offset();
			windowWidth = window.innerWidth;
			divPos = {};
			scale = imageDiv.width() / 4000;

			for (var i = messages.length - 1; i >= 0; i--) {
				messages[i].x1 = Math.round(messages[i].origX * scale);
				messages[i].y1 = Math.round(messages[i].origY * scale);
				messages[i].x2 = Math.round((messages[i].origX + 16) * scale);
				messages[i].y2 = Math.round((messages[i].origY + 16) * scale);
			}
		});
	});


	var imageDiv = $("#imageDiv");
	var scale = imageDiv.width() / 4000;
	var messages = [];
	var jsonResponse; 

	function setUpMessages() {
		$http.get("https://fmsc-server.herokuapp.com/api/blocks/1").then(function(response) {
			
			console.log(response);

			jsonResponse = response.data;//JSON.parse(response);

			// set up states 
	        var states = {
		        "Alabama":0,
		        "Alaska":0,
		        "Arizona":0,
		        "Arkansas":0,
		        "California":0,
		        "Colorado":0,
		        "Connecticut":0,
		        "Delaware":0,
		        "Florida":0,
		        "Georgia":0,
		        "Hawaii":0,
		        "Idaho":0,
		        "Illinois":0,
		        "Indiana":0,
		        "Iowa":0,
		        "Kansas":0,
		        "Kentucky":0,
		        "Louisiana":0,
		        "Maine":0,
		        "Maryland":0,
		        "Massachusetts":0,
		        "Michigan":0,
		        "Minnesota":0,
		        "Mississippi":0,
		        "Missouri":0,
		        "Montana":0,
		        "Nebraska":0,
		        "Nevada":0,
		        "New Hampshire":0,
		        "New Jersey":0,
		        "New Mexico":0,
		        "New York":0,
		        "North Carolina":0,
		        "North Dakota":0,
		        "Ohio":0,
		        "Oklahoma":0,
		        "Oregon":0,
		        "Pennsylvania":0,
		        "Rhode Island":0,
		        "South Carolina":0,
		        "South Dakota":0,
		        "Tennessee":0,
		        "Texas":0,
		        "Utah":0,
		        "Vermont":0,
		        "Virginia":0,
		        "Washington":0,
		        "West Virginia":0,
		        "Wisconsin":0,
		        "Wyoming":0,
		        "No State":0
			}
			var count = 0;

	 		for (var i = 0; i < jsonResponse.blocks.length; i++) { 
	 			console.log(jsonResponse.blocks[i]);
	 			if (jsonResponse.blocks[i].state == "") {
	 				states["No State"] += 1;
	 			}
	 			else {
	 				states[jsonResponse.blocks[i].state] += 1;
	 			}
	 			count += 1;
	 			var message = {
	 				origX: jsonResponse.blocks[i].leftXCrnr,
	 				origY: jsonResponse.blocks[i].leftYCrnr,
				    x1: Math.round(jsonResponse.blocks[i].leftXCrnr * scale),
				    y1: Math.round(jsonResponse.blocks[i].leftYCrnr * scale),
				    x2: Math.round((jsonResponse.blocks[i].leftXCrnr + 16) * scale), 
				    y2: Math.round((jsonResponse.blocks[i].leftYCrnr + 15) * scale),  
				    message: jsonResponse.blocks[i].message
				};

				messages.push(message);
			}

			intiStats(states, count);
			//console.log(messages);
		});	
	}

	setUpMessages();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var progressBarData;
	var top5Data;
	var allStatesConfig;

	function intiStats(states, count)
	{
		console.log(count);
		progressBarData = {
          labels: ["Progress"],
          datasets: [{
              label: 'Pixels Purchased',
              backgroundColor: "rgba(73,232,0,1)",
              highlightStroke: "black",
              data: [count]
          }, {
              label: 'Pixels Left',
              backgroundColor: "rgba(232,43,0,1)",
              data: [50000-count]
          }]
      	};

        var temp = [];
		for (var key in states) {
		    temp.push([key, states[key]]);
		}

		temp.sort(function(a, b) {return b[1] - a[1]})
		console.log(temp);


		var values = []
		for (var i = 0; i < 50; i++) {
			values[i] = temp[i][1];
		}
		var stateNames = []
		for (var i = 0; i < 50; i++) {
			stateNames[i] = temp[i][0];
		}
		

      	top5Data = {
            labels: stateNames.slice(0,5),
            datasets: [{
                label: 'Pixels',
                backgroundColor: "blue",
                highlightStroke: "black",
                data: values.slice(0,5)
            }]

        };

        allStatesConfig = {
	        type: 'doughnut',
	        data: {
	            datasets: [{
	                data: values,
	                backgroundColor: [
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                    "#F7464A",
	                    "#46BFBD",
	                    "#FDB45C",
	                    "#949FB1",
	                    "#4D5360",
	                ],
	                label: 'Dataset 1'
	            }],
	            labels: stateNames
	        },
	        options: {
	            responsive: false,
	            legend: {
	                display: false,
	                position: 'top',
	            },
	            title: {
	                display: true,
	                text: 'Donations by State'
	            }
	        }
    	};
    	drawStats();
	}

	function drawStats()
	{
          var ctx = document.getElementById("progress-bar").getContext("2d");
          var progBar = new Chart(ctx, {
              type: 'bar',
              data: progressBarData,
              options: {
              		elements: {
              			 rectangle: {
                          borderWidth: 1,
                          borderColor: "black",
                          borderSkipped: 'bottom'
                      }
                      },
                  title:{
                      display:true,
                      text:"Percent of Meals Given"
                  },
                  tooltips: {
                      mode: 'label'
                  },
                  responsive: false,
                  scales: {
                      xAxes: [{
                          stacked: true,
                      }],
                      yAxes: [{
                          stacked: true
                      }]
                  }
              }
          });

          var ctx1 = document.getElementById("top5-barchart").getContext("2d");
          var topFiveBar = new Chart(ctx1, {
              type: 'bar',
              data: top5Data,
              options: {
                  // Elements options apply to all of the options unless overridden in a dataset
                  // In this case, we are setting the border of each bar to be 2px wide and green
                  elements: {
                      rectangle: {
                          borderWidth: 1,
                          borderColor: "black",
                          borderSkipped: 'bottom'
                      }
                  },
                  responsive: false,
                  legend: {
                      position: 'top',
                  },
                  title: {
                      display: true,
                      text: 'Top 5 States'
                  }
              }
          });

        var ctx2 = document.getElementById("all-states-doughnut").getContext("2d");
        var allStates = new Chart(ctx2, allStatesConfig);
	}

    $rootScope.isLoggedIn = authService.loggedIn;
  }]);
