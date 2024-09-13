const findFirstDuplicate = require("./findfirst.js");

test("find first number",()=> {
	let findNumber = ([2, 4, 6, 8, 9,3,7,16, 4]);
	let result = findFirstDuplicate(findNumber);
	expect(result).toBe(4)
});