const findMax = require("./findMax.js");

test("find max number",()=> {
	let largest = ([2, 4, 6, 8, 9,3,7,16]);
	let result = findMax(largest)
	expect(result).toBe(16)
});