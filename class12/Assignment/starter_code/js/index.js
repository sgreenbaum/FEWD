$(document).ready(function(){
	//When user clicks the submit button, we get the city that the user entered and test to see what the city is. If the city is New York update the backgrounf to  the New York images. If the cit yis San Francisco...
	
  $('#submit-btn').click(changeCity);
	
  		function changeCity(event){
  			//Stop the form from submitting
    		event.preventDefault();
        //Variable storing city info. Defines the value of city based on the user input.
        var city = $('#city-type').val();

    			if (city === "New York" || city === "NYC" || city === "New York City"){
    				$('body').attr('class', 'nyc');
    			}if (city === "San Francisco" || city ==="SF" || city === "Bay Area"){
    				$('body').attr('class', 'sf');;
    			}if (city === "Los Angeles" || city === "LA" || city === "LAX"){
    				$('body').attr('class', 'la');
    			}if (city === "Austin"){
    				$('body').attr('class', 'austin');
    			}if (city === "Sydney"){
    				$('body').attr('class', 'sydney');
          }		
      }
});