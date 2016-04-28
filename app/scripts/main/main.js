'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['authService' , '$rootScope', function (authService, $rootScope) {

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
				message.innerHTML = "<h4>" + messages[i].user + "</h4><p>" + messages[i].message + "</p>";
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
	console.log(imageDiv.width() + imageDiv.height() );
	var scale = imageDiv.width() / 4000;
	console.log("scale: " + scale )

	var messages = [];

	function setUpMessages() {
		var text =  '{ "messages" : [' +
						'{ "x":0 , "y":0, "user":"testuser", "message":"This is the test message" }' + 
					']}';
 		var obj = JSON.parse(text);

 		for (var i = 0; i < obj.messages.length; i++) { 
 			console.log(obj.messages[i]);

 			var message = {
 				origX: obj.messages[i].x,
 				origY: obj.messages[i].y,
			    x1: Math.round(obj.messages[i].x * scale),
			    y1: Math.round(obj.messages[i].y * scale),
			    x2: Math.round((obj.messages[i].x + 16) * scale), 
			    y2: Math.round((obj.messages[i].y + 15) * scale),  
			    user: obj.messages[i].user,
			    message: obj.messages[i].message
			};

			messages.push(message);
		}
		console.log(messages);
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

	function intiStats()
	{
		progressBarData = {
          labels: ["Progress"],
          datasets: [{
              label: 'Pixels Purchased',
              backgroundColor: "rgba(73,232,0,1)",
              highlightStroke: "black",
              data: [25]
          }, {
              label: 'Pixels Left',
              backgroundColor: "rgba(232,43,0,1)",
              data: [75]
          }]
      	};

      	top5Data = {
            labels: ["State 1", "State 2", "State 3", "State 4", "State 5"],
            datasets: [{
                label: 'Pixels',
                backgroundColor: "blue",
                highlightStroke: "black",
                data: [12,44,33,55,77]
            }]

        };

        allStatesConfig = {
	        type: 'doughnut',
	        data: {
	            datasets: [{
	                data: [75,5,33,55,22,75,55,3,55,22,75,5,3,5,2,75,5,3,5,22,7,5,3,55,22,
	                        7,5,3,55,2,75,5,33,55,22,75,55,33,55,22,75,55,33,55,22,75,55,33,55,22],
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
	            labels: [
	                "Alabama",
	                "Alaska",
	                "Arizona",
	                "Arkansas",
	                "California",
	                "Colorado",
	                "Connecticut",
	                "Delaware",
	                "Florida",
	                "Georgia",
	                "Hawaii",
	                "Idaho",
	                "Illinois",
	                "Indiana",
	                "Iowa",
	                "Kansas",
	                "Kentucky",
	                "Louisiana",
	                "Maine",
	                "Maryland",
	                "Massachusetts",
	                "Michigan",
	                "Minnesota",
	                "Mississippi",
	                "Missouri",
	                "Montana",
	                "Nebraska",
	                "Nevada",
	                "New Hampshire",
	                "New Jersey",
	                "New Mexico",
	                "New York",
	                "North Carolina",
	                "North Dakota",
	                "Ohio",
	                "Oklahoma",
	                "Oregon",
	                "Pennsylvania",
	                "Rhode Island",
	                "South Carolina",
	                "South Dakota",
	                "Tennessee",
	                "Texas",
	                "Utah",
	                "Vermont",
	                "Virginia",
	                "Washington",
	                "West Virginia",
	                "Wisconsin",
	                "Wyoming"
	            ]
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

	intiStats();
    $rootScope.isLoggedIn = authService.loggedIn;
  }]);
