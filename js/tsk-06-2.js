//Задача 1: Лічильник з кнопками
//Мета: Створи клас CounterCard, який рендерить картку з числом і двома кнопками: «+1» та «-1».

//Вимоги:

//Метод render() додає картку до DOM.

//Кнопка «+1» викликає метод increment(), який збільшує значення.

//Кнопка «-1» викликає метод decrement(), який зменшує значення.

//Значення зберігається як приватна змінна.

//Використай bind() або стрілкові функції для збереження this.

//class CounterCard {

//	#value = 0;

//	render() {

//		const newDiv = document.createElement("div");
//		newDiv.classList.add("container");

//		const btnPlus = document.createElement("button");
//		const btnMinus = document.createElement("button");

//		btnPlus.textContent = "+1";
//		btnMinus.textContent = "-1";

//		btnPlus.dataset.type = 'increment';
//		btnMinus.dataset.type = 'decrement';

//		newDiv.appendChild(btnPlus);
//		newDiv.appendChild(btnMinus);

//		document.body.appendChild(newDiv);

//	}

//	increment() {
//		return this.#value++;
//	}

//	decrement() {
//		return this.#value--;
//	}
//}

//const newCard = new CounterCard;

//newCard.render();

//const container = document.querySelector(".container");

//container.addEventListener("click", (e) => {
//	if (e.target.dataset.type === "increment") {
//		newCard.increment();
//	} else if (e.target.dataset.type === "decrement") {
//		newCard.decrement();
//	}
//})

//variant 2

//class CounterCard {
//	#value = 0;
//	#elValue;

//	render() {
//		const container = document.createElement("div");
//		container.classList.add("counter");

//		this.#elValue = document.createElement("span");
//		this.#elValue.textContent = this.#value;

//		const btnPlus = document.createElement("button");
//		const btnMinus = document.createElement("button");

//		btnPlus.textContent = "+1";
//		btnMinus.textContent = "-1";

//		btnPlus.addEventListener("click", this.increment.bind(this));
//		btnMinus.addEventListener("click", this.decrement.bind(this));

//		container.append(this.#elValue, btnPlus, btnMinus);
//		document.body.appendChild(container);
//	}

//	increment() {
//		this.#value++;
//		this.#elValue.textContent = this.#value;
//	}

//	decrement() {
//		this.#value--;
//		this.#elValue.textContent = this.#value;
//	}
//}

//const card = new CounterCard();
//card.render();


//Мета: Створи клас TodoItem, який рендерить запис справи з чекбоксом і кнопкою видалення.

//	Вимоги:

//Метод render() створює елемент: текст + <input type="checkbox"> + кнопка «Видалити».

//	Коли чекбокс активний — додається клас done (стилізуй самостійно).

//	Кнопка «Видалити» видаляє карточку.

//	Опціонально: передай у конструктор об'єкт типу {text: "Купити хліб", done: false }.

//class TodoItem {
//	#text = "";
//	#done = false;

//	constructor(obj) {
//		this.#text = obj.text;
//		this.#done = obj.done;
//	}
//	render() {

//		const content = `
//		<ul class="list">
//			<li class="list_item">
//				<span class="text">${this.#text}</span>
//				<input type="checkbox" class="checkbox" name="check" id="check" data-type="check" ${this.#done === true ? "checked" : ""}/>
//				<button data-type="del">Видалити</button>
//			</li>
//		</ul>`;

//		document.body.insertAdjacentHTML('afterbegin', content);


//		const checkBox = document.querySelector("#check");

//		checkBox.addEventListener("click", this.mark.bind(this, checkBox));
//		document.querySelector("button").addEventListener("click", this.delete.bind(this));
//	}

//	delete() {
//		document.querySelector("li").style.display = "none";
//	}

//	mark(checkBox) {
//		checkBox.classList.toggle("done");
//	}
//}

//const card = new TodoItem({ text: "Купити хліб", done: false });
//card.render();


class TodoItem {
	#text = "";
	#done = false;
	#element;

	constructor({ text, done }) {
		this.#text = text;
		this.#done = done;
	}

	render() {
		this.#element = document.createElement("li");
		this.#element.className = "list_item";

		const textSpan = document.createElement("span");
		textSpan.textContent = this.#text;
		textSpan.className = "text";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = this.#done;
		checkbox.className = "checkbox";

		const btnDelete = document.createElement("button");
		btnDelete.textContent = "Видалити";

		const btnAdd = document.createElement("button");
		btnAdd.textContent = "Додати нову задачу";

		// Прив'язка контексту
		checkbox.addEventListener("change", this.toggleDone.bind(this, checkbox));
		btnDelete.addEventListener("click", this.remove.bind(this));
		btnAdd.addEventListener("click", this.askAndCreate.bind(this));

		this.#element.append(textSpan, checkbox, btnDelete, btnAdd);

		let list = document.querySelector(".list");
		if (!list) {
			list = document.createElement("ul");
			list.className = "list";
			document.body.appendChild(list);
		}

		list.appendChild(this.#element);
	}

	toggleDone(checkbox) {
		this.#done = checkbox.checked;
		this.#element.classList.toggle("done", this.#done);
	}

	remove() {
		this.#element.remove();
	}

	askAndCreate() {
		const newText = prompt("Введіть нову задачу:");
		if (newText && newText.trim().length > 0) {
			const newTask = new TodoItem({ text: newText.trim(), done: false });
			newTask.render();
		}
	}
}

const todo = new TodoItem({ text: "Перша задача", done: false });
todo.render();
