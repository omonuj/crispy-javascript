function factorial(number) {
	
	factorial = 1;

	for(let index = 1; index <= number; index++) {
		factorial *= index;

	}
	return factorial;
}

let digits = 7;
let result = factorial(7);
console.log(result);