function reverseArray(arr){

	let reversed = [];
	for (let index = arr.length - 1; index >= 0; index--) {
		reversed.push(arr[index]);
	}
	return arr;
}

let digits = [2, 3, 4, 5, 6, 7,8];
let result = reverseArray(digits);
console.log(result);




