function cardValidator(number){


	let joy = "";	
	for (let index = 0; index < number.length; index++){
		if (number[index] != "-") {
		joy += number[index];
		} 
	
	}
	if (joy.length == 16 && (joy.startsWith("4") || joy.startsWith ("5") || joy.startsWith ("6"))) {
		return true;
	}
	else {
		return false;
	}



}

console.log(cardValidator("5556-5675-5678-6787"));
