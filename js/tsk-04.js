
function greetFunc(name) {
	return `Привіт ${name}`;

}

const greet = greetFunc;
console.log(greet("Анна")); // Привіт, Анна!


function hello() {
	return "Hello!";
}
function isFunction(variable) {
	return typeof (variable) === "function";
}

console.log(isFunction(hello)); // true
console.log(isFunction("test")); // false


function sayHi() {
	console.log("Hi!");
}

function doTwice(namFunction) {
	sayHi();
	sayHi();
}

doTwice(sayHi); // має вивести Hi! Hi!


function makeMultiplier(factor) {
	return function (number) {
		return number * factor;
	};
}

const double = makeMultiplier(3);
console.log(double(5)); // 10

function add(x, y) {
	return x + y;
}

const calculator = {
	add: add
};

console.log(calculator.add(2, 3)); // 5


let a = [1, 2, 3, 4];
let b = [2, 41];

b.push(...a)

console.log(b);
