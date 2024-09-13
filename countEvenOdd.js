function countEvenOdd(numbers) {
	let evenCount = 0;
	let oddCount = 0;

	for (let num of numbers) {
		if (num % 2 == 0) {
		  evenCount++;
		} else {
		  oddCount++;
		}
	   }

	
	return [evenCount, oddCount];
}

const numbers = [2, 1,5, 7, 8]
const result = countEvenOdd(numbers);
console.log(result);
		
		
const digits = [4, 1, 5, 7, 9];
const output = countEvenOdd(digits);
console.log(output);