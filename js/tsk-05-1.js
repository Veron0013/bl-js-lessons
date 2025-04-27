function doOperation(a, b, operation) {
	return operation(a, b);
}

console.log(doOperation(5, 2, (x, y) => x + y)); // 7
console.log(doOperation(5, 2, (x, y) => x * y)); // 10

function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function applyOperation(a, b, operation) {
	return operation(a, b);
}

console.log(applyOperation(3, 4, add));      // 7
console.log(applyOperation(3, 4, multiply)); // 12

function repeat(n, callback) {
	for (let index = 0; index < n; index++) {
		callback();
	}
}

repeat(3, () => console.log("Привіт!"));
// має вивести "Привіт!" три рази

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function isEven(num) {
	return num % 2 === 0;
}

function filterEvenNumbers(arr) {
	let newArray = [];
	for (const element of arr) {
		if (!isEven(element)) {
			continue;
		}

		newArray.push(element);

	}
	return newArray;
}

console.log(filterEvenNumbers(numbers)); // [2, 4, 6, 8]


const names = ["Anna", "Bohdan", "Oleg"];

const lengths = names.map((element) => element.length);

console.log(lengths); // [4, 6, 4]


const capitalizeFirstLetter = (arg) => arg.charAt(0).toUpperCase() + arg.slice(1);

console.log(capitalizeFirstLetter("javascript")); // "Javascript"


function customForEach(array, callback) {
	for (const element of array) {
		callback(element);
	}
}

customForEach([1, 2, 3], (num) => {
	console.log(`Елемент: ${num}`);
});
// Має вивести:
// Елемент: 1
// Елемент: 2
// Елемент: 3

const greet = (name) => {
	return "Привіт, " + name + "!";
}

// Перепиши у стрілочну функцію

const multiplyNew = (a, b) => a * b; // Напиши стрілочну функцію

console.log(multiplyNew(5, 3)); // 15


const nextNumbers = [2, 3, 4, 5];

console.log(nextNumbers.map((el) => el * el));
