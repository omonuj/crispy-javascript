let numbers = [2, 3, 6, 7, 8];

let max = numbers[0];
let min = numbers[0];

for (let index = 0; index < numbers.length; index++) {
	if (numbers[index] > max) {
		max = numbers[index];
	}

	if (numbers[index] < min) {
		min = numbers[index];
	}

}

let result = [];
result[0] = max;
result[1] = min;

console.log(result);

let number = [4, 5, 6, 7, 9, -4];

let maxi = number[0];
let mini = number[0];

for (let index = 0; index < number.length; index++) {
	if (number[index] > maxi) {
		maxi = number[index];
	}

	if (number[index] < mini) {
		mini = number[index];
	}

}

let blue = [];
blue[0] = maxi;
blue[1] = mini;

console.log(blue);

