$(document).ready(function(){

	//Variables
	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg'];

	var i = 0;

	var lastIndexOfArray = animals.length - 1;

	//Events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

	//Define functions (reactions)
	function goToNextAnimal(){

		if (i === animals.length - 1) {
			i = 0; //this brings it back to 0
		} else {
			i++;
		}

			var nextAnimal = animals[i];

			$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);
		

	}


	function goToPreviousAnimal(){

		if (i === 0){
			i = lastIndexOfArray;
		}else {
			i--;

		var previousAnimal = animals[i];

		$('#image-to-vote-on').attr('src', 'images/' + previousAnimal);
	
	}






});