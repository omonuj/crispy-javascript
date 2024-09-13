const countOddNumbers = require("./countOddNumbers.js");

test("count odd numbers",()=> {
	let countNumbers = ([2, 4, 6, 8, 9,3,7,16]);
	let result = countOddNumbers(countNumbers)
	expect(result).toBe(3)
});
