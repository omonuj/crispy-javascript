function multiplyByTwo(number) {

	let multiplier = 2;
	return number * multiplier;
};

function calculate(num,callBack){
	return callBack(num)
};

console.log(calculate(3,multiplyByTwo));