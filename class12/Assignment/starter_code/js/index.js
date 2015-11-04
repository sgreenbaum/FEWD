$document.ready(function(){
	//When user clicks the submit button, the background city will change.
	$('#submit-btn').click(changeCity);
	//Variable storing Farenieht
  	var city;

  		function changeCity{
  			
  			//Stop the form from submitting
    		event.preventDefault();

    		//Defines the value of city based on the user input
    		city = $('#city-type').val();

    			if (city = New York or New York City or NYC){
    				$('body').css('background', '.nyc')
    			}if (city = San Francisco or sf or Bay Area){
    				$('body').css('background', '.sf')
    			}if (city = Los Angeles or la or lax){
    				$('body').css('background', '.la')
    			}if (city = Austin or ATX){
    				$('body').css('background', '.austin')
    			}if (city = Sydney or SYD){
    				$('body').css('background', '.sydney')
  		}


});