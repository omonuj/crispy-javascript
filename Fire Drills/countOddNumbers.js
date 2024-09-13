function countOddNumbers(array) {
	
	let odd = 0;
	for(let index of array) {
		if(index % 2 != 0) {
			odd++;
		}
	}
	return odd;
}
//let digits = [2, 4, 6, 11, 9, 7, 9, 3];
//countOddNumbers(digits);
//console.log(countOddNumbers(digits));

module.exports = countOddNumbers
			