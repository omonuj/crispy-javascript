function findMax(array) {

	let maxNumber = array[0];

	for(let index = 0; index < array.length; index++) {
		if (array[index] > maxNumber) {
			maxNumber = array[index];
		}
	
	}
	return maxNumber;
}

//let digits = [4, 6, 8, 9, 14];
//findMax(digits);
//console.log(findMax(digits));

module.exports = findMax;