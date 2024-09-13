const sumEven = require("./sumeven.js");

test("sum even numbers",()=> {
	let even = ([2, 4, 6, 8, 9,3,7,9]);
	let result = sumEven(even)
	expect(result).toBe(20)
});