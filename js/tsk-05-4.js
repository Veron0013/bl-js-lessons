//class SelfCheckout {
//	#message = '';
//	constructor() {
//		this.items = [];
//	}

//	addItem(name, price, qty) {
//		const validatedName = this.#validateItem(name);
//		this.items.push({ name: validatedName, price: price, quantity: qty });
//		this.#log(`added: ${validatedName}`);
//	}
//	removeItem(name) {
//		const validatedName = this.#validateItem(name);
//		//console.log(validatedName);

//		for (let index = 0; index < this.items.length; index++) {
//			//console.log(this.items[index].name, validatedName);
//			if (this.items[index].name === validatedName) {
//				this.items.splice(index, 1);
//				this.#log(`deleted: ${validatedName}`);
//				return;
//			}
//		}
//		this.#log(`not found: ${validatedName}`);
//	}

//	getTotal() {
//		function calculate() {
//			return this.items.reduce((a, v) => a = a + v.price * v.quantity, 0);
//		}
//		return calculate.call(this)
//	}

//	#validateItem(itemName) {
//		return String(itemName).toLowerCase().trim();
//	}
//	#log(message) {
//		this.#message += ` ${message};`;
//	}
//	showLog() {
//		return this.#message;
//	}
//}


//class User {
//	static count = 0;

//	constructor(name) {
//		let userName = name;
//		if (!this.#validateName(userName)) {
//			console.log("Wrong name!!!");
//			userName = "Default";
//		}
//		this.name = userName;
//		User.count++;
//	}

//	sayHi() {
//		return `${this.name} says HI`;
//	}

//	introduce(obj) {
//		return `${this.name} introduce ${obj.name}`;
//	}

//	#validateName(strName) {
//		return strName !== "" && String(strName).trim().length > 0;
//	}

//	getTotalUsers() {
//		return User.count;
//	}

//}


//const u1 = new User("Max");
//const u2 = new User("Kate");
//const u3 = new User("");

//const say = u1.sayHi.bind(u2);
//const introduce = u2.introduce.bind(u2, u1);

//console.log(say()); // має сказати від імені Kate
//console.log(introduce());
//console.log(u1.getTotalUsers());


//class Robot {

//	constructor(name) {
//		this.name = name
//	}

//	greet() {
//		return `robot ${this.name} greet you, skinny bag!!!`
//	}
//}

//function externalGreet(fn, obj) {
//	return fn.apply(obj);
//}

//const robot = new Robot("Wally");
//console.log(externalGreet(robot.greet, robot));


//Створи клас Notifier, в якому є метод sendNotification(message), але він викликає #notifyInternal, передаючи this через call.


//class Notifier {

//	constructor(msg) {
//		this.message = msg;
//	}


//	sendNotification(message) {
//		return this.#notifyInternal(message);
//	}

//	#notifyInternal(message) {
//		return this.message.trim().toLowerCase() === "notify" ? `${message} is OK` : `${message} is Wrong`;
//	}
//}

//const objct = new Notifier("notifys");
//console.log(objct.sendNotification("hello"));


//class Library {
//	static roles = {
//		admin: "admin",
//		editor: "editor",
//		basic: "basic"
//	};

//	#role;

//	constructor(books, role) {
//		this.books = books;
//		this.#role = role || Library.roles.basic;
//	}

//	addBook(book) {
//		if (this.#hasPermission()) {
//			this.books.push(book);
//			return `book "${book}" added. role: ${this.#role}`;
//		} else {
//			return `no permission to add books`;
//		}
//	}

//	#hasPermission() {
//		return this.#role === Library.roles.admin || this.#role === Library.roles.editor;
//	}
//}

//const Lib = new Library([], Library.roles.admin);
//const Lib2 = new Library([]);
//const addBook = Lib.addBook;
//console.log(addBook.call(Lib2, "New book"));
//console.log(addBook.call(Lib, "New book 1"));


//✅ 6. Фабрика кнопок з прив’язаним this
////Створи функцію createButton(action, context), яка повертає кнопку (об’єкт з методом click), де action прив’язано до context через bind.


//function createButton(action, context) {
//	class DynamicButton {
//		click = action.bind(context);
//	}

//	const btn = new DynamicButton();
//	console.log(btn.click());
//}


