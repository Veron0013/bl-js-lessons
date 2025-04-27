//2025-04-27

//Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

let arr = ['jazz', 'blues'];
arr.push('rock-n-roll');

arr[arr.indexOf('blues')] = 'classic';

function logItems(array) {
	for (let i = 0; i < array.length; i++) {
		let pattern = `${i + 1} - ${array[i]}`;

		console.log(pattern);
	}
	//let pattern = `${i + 1} - ${item}`;
	//console.log(
	//	array.map((item, i) => [pattern]).join('\n')
	//);
}

logItems(arr);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

//const logins = ["Peter", "John", "Igor", "Sasha"];

//function checkLogin(array) {
//	let loginName = prompt("Введіть ім'я");
//	loginName = loginName.charAt(0).toUpperCase() + loginName.slice(1);
//	return array.includes(loginName.trim()) ? `Welcome, ${loginName}!` : "User not found";
//}

//alert(checkLogin(logins));

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage() {
	let sum = 0;
	let avg = 0;
	for (let index = 0; index < arguments.length; index++) {
		if (!Number.isFinite(arguments[index])) {
			continue;
		}
		sum += arguments[index];
		avg++;
	}

	return sum / avg;
}

console.log(calculateAverage(10, 10, 10, "foo", 10, true));

//4

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function summCouples(array) {
	let sumArr = [];
	for (let index = 0; index < array.length - 1; index++) {
		sumArr.push(array[index] + array[index + 1]);
	}
	return sumArr;
}

console.log(summCouples([22, 11, 34, 5, 12, 13, 14, 15]));

//5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(arr) {
	//return !Array.isArray(numbers) ? 'Sory, it is not an array!' : Math.min(...arr);

	let min = arr[0];
	for (const element of arr) {
		min = element < min ? element : min;
	}

	return min;
}

console.log(findSmallestNumber(numbers));

//console.log(Array.isArray(numbers));
//6

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
	let strArray = string.split(" ");

	let longWord = strArray[0];
	for (const element of strArray) {
		longWord = element.length > longWord.length ? element : longWord;
	}

	return longWord;
}

console.log(findLongestWord("London is the capital of Great Britain"));

//7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
	name: "John",
	age: 20,
	hobby: "tenis",
	premium: true,
};

function scriptUser(arg) {
	arg.mood = 'happy';
	arg.hobby = 'skydiving';
	arg.premium = false

	for (const key of Object.keys(arg)) {
		console.log(`${key}:${arg[key]}`);
	}
}

scriptUser(user);

//8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
	Mango: 100,
	Poly: 160,
	Ajax: 1470,
	getSum() {
		return Object.values(this).reduce((a, v) => Number.isFinite(v) ? a + v : a + 0, 0)
	},
};

console.log(salaries.getSum());


//9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
	read(a, b) {
		this.a = a;
		this.b = b;
	},
	sum() {
		if (!this.exist()) {
			return 'No such propeties';
		}

		let sum = 0;
		for (const v of Object.values(this)) {
			sum = Number.isFinite(v) ? sum + v : sum;
		}
		return sum;
	},

	mult() {
		if (!this.exist()) {
			return 'No such propeties';
		}

		let mult = 1;
		for (const v of Object.values(this)) {
			mult = Number.isFinite(v) ? mult * v : mult;
		}
		return mult;
	},
	exist() {
		return this.a != null && this.b != null;
	}
}

//calculator.read();
console.log(calculator.mult());