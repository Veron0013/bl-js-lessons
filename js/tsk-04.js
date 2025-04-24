
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


//2025/04/24

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Результат:
// { apple: 3, banana: 2, orange: 1 }

function contWords(mWords) {
	return mWords.reduce((a, v) => { a[v] = a[v] ? ++a[v] : 1; return a }, {})

	let nObj = {};

	for (const element of mWords) {
		if (nObj[element]) {
			nObj[element]++;
		}
		else {
			nObj[element] = 1;
		}
	}

	return nObj;
}

console.log(contWords(words));

const products = [
	{ name: "iPhone", category: "tech" },
	{ name: "T-shirt", category: "clothes" },
	{ name: "MacBook", category: "tech" },
	{ name: "Jeans", category: "clothes" },
];

// Результат:
// {
//   tech: ["iPhone", "MacBook"],
//   clothes: ["T-shirt", "Jeans"]
// }

function getBack(arrOfObj) {

	return arrOfObj.reduce((acc, { category, name }) => {
		acc[category] = acc[category] ?? [];
		acc[category].push(name);
		return acc;
	}, {});

}

console.log(getBack(products));


const grades = [
	{ subject: "math", score: 90 },
	{ subject: "english", score: 85 },
	{ subject: "math", score: 70 },
	{ subject: "english", score: 95 },
];

// Результат:
// {
//   math: 80,      // (90 + 70) / 2
//   english: 90    // (85 + 95) / 2
// }

function getMidGrades(arrOfObj) {
	//let scObj = {};
	//let cObj = {};

	//for (const element of arrOfObj) {
	//	if (scObj[element.subject]) {
	//		scObj[element.subject] += element.score;
	//		cObj[element.subject]++;
	//	} else {
	//		scObj[element.subject] = element.score;
	//		cObj[element.subject] = 1;
	//	}
	//}

	//for (const [key, value] of Object.entries(scObj)) {
	//	scObj[key] = value / cObj[key];
	//}

	//return scObj;

	const result = arrOfObj.reduce((acc, { subject, score }) => {
		if (!acc[subject]) {
			acc[subject] = { total: 0, count: 0 };
		}
		acc[subject].total += score;
		acc[subject].count += 1;
		return acc;
	}, {});

	// Підрахунок середніх значень
	for (const subject in result) {
		result[subject] = result[subject].total / result[subject].count;
	}

	return result;
}

console.log(getMidGrades(grades));