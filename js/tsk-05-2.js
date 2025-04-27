const purchases = [
	{ name: 'Apple', price: 50 },
	{ name: 'Banana', price: 20 },
	{ name: 'Orange', price: 30 },
	{ name: 'Mango', price: 100 },
];

function filterExpensiveItems(arr, value) {
	arr.forEach(element => {
		if (isExpensive(element.price, value)) {
			console.log(element.name);
		}
	});
}

function isExpensive(a, b) {
	return a > b;
}

filterExpensiveItems(purchases, 40);


const repeatAction = (n, callback) => {
	for (let index = 0; index < n; index++) {
		callback(index);
	}
}

repeatAction(3, (i) => console.log(`Ітерація номер ${i}`));
// Ітерація номер 0
// Ітерація номер 1
// Ітерація номер 2

const names = ['Оля', 'Максим', 'Іван'];

const greetNames = (array) => {
	return array.reduce((a, v) => { a.push(`Привіт, ${v}!`); return a }, []);
}

console.log(greetNames(names));