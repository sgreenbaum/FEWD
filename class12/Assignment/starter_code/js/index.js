$document.ready(function(){
	//When user clicks the submit button, the background city will change.
	$('#entry').submit(changeCity);
	//Variable storing Farenieht
  	var city;

  		function changeCity(){
  			
  			//Stop the form from submitting
    		event.preventDefault();

    		//Defines the value of city based on the user input
    		city = $('#city-type').val();

    			if (city === 'New York'){
    				$('body').css('background', 'url(images/nyc.jpg)');
    			}if (city = San Francisco){
    				$('body').css('background', 'url(images/sf.jpg)');
    			}if (city = Los Angeles){
    				$('body').css('background', 'url(images/la.jpg)');
    			}if (city = Austin){
    				$('body').css('background', 'url(images/austin.jpg)');
    			}if (city = Sydney){
    				$('body').css('background', 'url(images/austin.jpg)');
          }		
      }
});