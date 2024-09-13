function findFirstDuplicate(arr) {
	let seen = new Set();
	for(let index = 0; index < arr.length; index++) {
		if (seen.has(arr[index])) {
			return arr[index];
		}
		seen.add(arr[index]);
	}
	return -1;
}

//let digits = [4, 6, 7, 8, 9, 0, 45, 4, 65, 45];
//findFirstDuplicate(digits);
//console.log(findFirstDuplicate(digits));

module.exports = findFirstDuplicate;