function sumEven(number) {

	let sum = 0;
	for(let index = 0; index < number.length; index++) {
		if(number[index] % 2 == 0) {
		sum = sum + number[index];
		}
	}
	return sum;
} 
//let digits = [2, 4, 6, 7, 9, 11, 67, 80];
//sumEven(digits);

//console.log(sumEven(digits));

module.exports = sumEven;
	