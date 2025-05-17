//class Greeter {
//	constructor(name) {
//		this.name = name;
//	}

//	sayHi() {
//		alert(`Привіт, я ${this.name}!`);
//	}
//}
//const myGreet = new Greeter("Al")
//const btn = document.createElement("button");

//btn.textContent = "Привітайся";

//btn.addEventListener("click", (e) => {
//	myGreet.sayHi();
//});

//document.body.appendChild(btn);

//btn.onclick = myGreet.sayHi.bind(myGreet);

////✅ Задача 2: Динамічне створення стилізованих елементів

//class BoxCreator {

//	createBox(color) {
//		const currBlock = document.createElement("div");
//		currBlock.style.width = "100px";
//		currBlock.style.height = "100px";
//		currBlock.style.margin = "10px";
//		currBlock.style.backgroundColor = color;

//		document.body.appendChild(currBlock);

//	}

//}

//✅ Задача 5: Карточки з діями

class Card {
	#el;

	render() {
		this.#el = document.createElement("div");
		this.#el.style.border = "1px solid black";
		this.#el.style.padding = "10px";
		this.#el.style.margin = "10px";

		this.#el.insertAdjacentHTML("beforeend",
			`<button class="delete">Видалити</button>
			 <button class="color">Змінити колір</button>`);

		document.body.appendChild(this.#el);

		// Знаходимо кнопки ВНУТРІШНЬО div-а
		const btnDelete = this.#el.querySelector(".delete");
		const btnColor = this.#el.querySelector(".color");

		// Прив'язуємо правильний this
		btnDelete.addEventListener("click", this.removeCard.bind(this));
		btnColor.addEventListener("click", this.changeColor.bind(this));
	}

	changeColor() {
		this.#el.style.backgroundColor = this.getRandomHexColor();
	}

	removeCard() {
		this.#el.remove();
	}

	getRandomHexColor() {
		return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
	}
}

const card = new Card;

card.render();

const card2 = new Card;

card2.render();

//Створи клас Card, який створює елемент з текстом та двома кнопками: "Видалити" і "Змінити колір".

//Вимоги:

//Картка має метод render(), який додає її до DOM.

//Кнопки керують діями через внутрішні методи.

//Метод changeColor() змінює фон на випадковий.

//Метод removeCard() видаляє картку.