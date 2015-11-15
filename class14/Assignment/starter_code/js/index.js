$(document).ready(function(){
//When a user selects the city from the dropdown menu, the background image will change to the selected city.

//Variables
var city = ['austin.jpg', 'la.jpg','nyc.jpg', 'sf.jpg', 'sydney.jpg']

var i = 0

var cityToBeSelected = ['ATX', "LAX", "NYC", "SF", "SYD"]


	//Events

	$("#city-type").append('<option value="option">NYC</option>');
	 
	 
	//Events
	$('#city-type').click(changeCity)

	//Variable storing city info. Defines the value of city based on the user input.
	    function changeCity(){

			var city = $('#city-type').val();

	    	if (city === "NYC"){
	    		$('body').attr('class', 'nyc');
	    	}if (city === "SF"){
	    		$('body').attr('class', 'sf');;
	    	}if (city === "LAX"){
	    		$('body').attr('class', 'la');
	    	}if (city === "ATX"){
	    		$('body').attr('class', 'austin');
	    	}if (city === "SYD"){
	    		$('body').attr('class', 'sydney');
	          }		
	    }
});