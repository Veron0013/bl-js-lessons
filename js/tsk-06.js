// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];

const newArray = (arr) => arr.map(el => Math.pow(el, 2));

console.log(newArray(numbers));


// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
	{ id: 1, values: [1, 2, 3] },
	{ id: 2, values: [4, 5, 6] },
	{ id: 3, values: [7, 8, 9] },
];

console.log(data.flatMap(el => el.values));

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
	{ name: 'John', age: 27 },
	{ name: 'Jane', age: 31 },
	{ name: 'Bob', age: 19 },
];

const filteredArray = (arr) => arr.filter(el => el.age > 20).length > 0;

console.log(filteredArray(people));

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers2 = [2, 4, 6, 8, 10];

const doubleArray = (arr) => arr.reduce((a, v) => a = v % 2 === 0, false);

console.log(doubleArray(numbers));


// Знайдіть перше непарне число

const numbers3 = [2, 1, 6, 8, 9, 10, 12];

const firstNotDouble = (arr) => {
	const founded = arr.find(el => el % 2 !== 0);
	return founded === undefined ? "Not found" : founded
};

console.log(firstNotDouble(numbers3));

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const sortArray = (arr) => arr.toSorted((a, b) => a - b);
console.log(sortArray(numbersArray));

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortStringArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
console.log(sortStringArray(stringArray));

class Calculator {
	#number = 0;

	number(num) {
		this.#number = num;
		return this;
	}

	add(num) {
		this.#number += num;
		return this;
	}
	subtract(num) {
		this.#number -= num;
		return this;
	}
	multiply(num) {
		this.#number *= num;
		return this;
	}
	divide(num) {
		this.#number /= num;
		return this;
	}
	getResult() {
		return this.#number;
	}

}

const calc = new Calculator();

const result = calc
	.number(10)   // Встановлюємо початкове значення 10
	.add(5)       // Додаємо 5 (10 + 5 = 15)
	.subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
	.multiply(4)  // Множимо на 4 (12 * 4 = 48)
	.divide(2)    // Ділимо на 2 (48 / 2 = 24)
	.getResult(); // Отримуємо результат: 24

console.log(result); // 24