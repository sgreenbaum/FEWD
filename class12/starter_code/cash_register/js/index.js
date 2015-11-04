$(document).ready(){

	var total = 0;

	//Listen for user to submit a new price
	$('#entry').submit(sumTotalAndNewEntry);

	function sumTotalAndNewEntry(){
		//Get the value from the inputfield new num
		var entryNew = $('#newEntry').val();
		//Convert the value to a number
		var entryNewNum = parseFloat(
			entryNew);
		//Change the number of the new entry into currency
		var entryNewCurrency = currencyFormat(entryNewNum);
		//updating the current total
		total = total + entryNewNum;
	}

	function currencyFormat(numberToConverter){
		var currency = numberToConvert.toFixed(2);
		var currencyWithDollar = '$' + currency;
		return currencyWithDollar;
	}
});