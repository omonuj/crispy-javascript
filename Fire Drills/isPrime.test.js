const isPrime = require("./isPrime.js");

test("prime numbers",()=> {
	//let prime = 7;
	let result = isPrime(33);
	expect(result).toEqual(false)
});
