
//class SafeBox {
//	#value;
//	constructor(value) {
//		this.#value = value;
//	}

//	getValue() {
//		return this.#value;
//	}
//}



//const box = new SafeBox('secret123');
//console.log(box.getValue()); // secret123
//box.#value = 'hack'; // має викинути помилку


//class Counter {
//	static instance = 0;
//	constructor() {
//		Counter.instance += 1;
//	}

//	static getInstanceCount() {
//		return Counter.instance;
//	}
//}

//new Counter();
//new Counter();
//console.log(Counter.getInstanceCount()); // 2




//const calculator = {
//	a: 10,
//	b: 5,
//	sum() {
//		return this.a + this.b;
//	}
//};

//const useCalculator = (fn, context) => {
//	return fn.call(context);
//}

//console.log(useCalculator(calculator.sum, calculator)); // 15

class BankAccount {
	constructor(name, summ) {
		this.name = name;
		this.summ = summ;
	}

	withdraw(amount) {
		this.summ -= amount;
	}

	deposit(amount) {
		this.summ += amount;
	}
}
const acc = new BankAccount('John', 1000);
const withdraw = acc.withdraw.bind(acc);
withdraw(100); // має працювати, не втрачаючи this
//console.log(acc.summ);


//6. Сервіс книг із приватними методами
//Створи клас Library, який:

//приймає масив книг

//має публічний метод addBook(book)

//має приватний метод, який перевіряє, чи є така книга

//class Library {

//	constructor(books) {
//		this.books = books;
//	}

//	addBook(bookName) {
//		if (this.#bookHere(bookName)) {
//			console.log(`${bookName} already in this library`);
//			return;
//		}

//		this.books.push(bookName);
//		return console.log(`${bookName} added successfully`);
//	};

//	#bookHere(bookName) {
//		return this.books.includes(bookName);
//	}
//}

//const lib = new Library(['JS Basics']);
//lib.addBook('React'); // додає
//lib.addBook('JS Basics'); // ігнорує

//Є об'єкт user, який містить ім’я та метод greet, що повертає рядок привітання.



const user = {
	name: "Alice",
	greet(greeting) {
		return `${greeting}, I am ${this.name}`;
	}
};

const customGreet = (ob, fn, greeting) => {
	return fn.call(ob, greeting);
}

console.log(customGreet(user, user.greet, "hello"));
