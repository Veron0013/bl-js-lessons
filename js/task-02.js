//function mostFrequentChasdr(someString) {
//	let str = someString.trim();


//	let count = [];
//	let letters = [];

//	for (let i = 0; i < str.length; i++) {
//		if (str[i] === " ") {
//			continue;
//		}

//		if (letters.includes(str[i])) {
//			continue;
//		}

//		letters.push(str[i]);
//		count.push(recursiveCount(str[i], str));
//	}

//	let maxIndex = 0;
//	let maxCount = count[0];

//	for (let i = 0; i < count.length; i++) {
//		if (count[i] > maxCount) {
//			maxCount = count[i];
//			maxIndex = i;
//		}
//	}

//	console.log("більше всього букви " + letters[maxIndex]);

//}

//function recursiveCount(letter, word) {
//	let count = 0;

//	for (i = 0; i < word.length; i++) {
//		if (word[i] === letter) {
//			count += 1;
//		}
//	}

//	return count;
//}

//mostFrequentChar("javascript is awesome!");

//mostFrequentChar("bobak");

//function mostFrequentChar(str) {
//	str = str.trim();
//	const counter = {};

//	for (const char of str) {
//		if (char === ' ') continue;
//		counter[char] = (counter[char] || 0) + 1;
//	}

//	console.log(counter);
//	return;
//	let maxChar = null;
//	let maxCount = 0;

//	for (const char in counter) {
//		if (counter[char] > maxCount) {
//			maxChar = char;
//			maxCount = counter[char];
//		}
//	}

//	console.log(`Більше всього букви "${maxChar}" (${maxCount} разів)`);
//}

//function firstUniqueChar(str) {
//	str = str.trim();
//	const counter = {};

//	for (const char of str) {
//		if (char === ' ') continue;
//		counter[char] = (counter[char] || 0) + 1;
//	}

//	let minChar = null;
//	let minCount = 1;

//	for (const char in counter) {
//		if (counter[char] === minCount) {
//			minChar = char;
//			break;
//		}
//	}

//	console.log(`Менше всього букви "${minChar}"`);
//}


//firstUniqueChar("abacabad");
//firstUniqueChar("aabbcc");



//function reverseArray(pArray) {

//	let newArray = [];
//	for (let i = pArray.Length - 1; i >= 0; i--) {
//		newArray.push(pArray[i]);
//	}

//	for (let i = 0; i >= pArray.Length; i++) {
//		newArray.unshift(pArray[i]);
//	}

//}


//console.log(reverseArray([1, 2, 3]));

//function longestWord(sampleWord) {
//	let sampleArr = sampleWord.trim().split(" ");

//	let longWord = "";

//	for (const el of sampleArr) {
//		if (longWord.length < el.length) {
//			longWord = el;
//		}
//	}

//	return longWord

//}

//console.log(longestWord("I am learning JavaScript right now")); // -> "JavaScript"


//function countVowels(str) {
//	const letters = str.match(/[aeiou]/gi); // g = глобально, i = не зважаючи на регістр
//	return letters ? str.length - letter s : str.length;
//}

//console.log(countVowels("Hello world"));

//function sumArray(arr) {
//	return arr.reduce((a, b) => a + b, 0);
//}

//console.log(sumArray([5, 10, 15]));


//function getUniqueValues(arr) {
//	let newArray = [];
//	for (let i = 0; i < arr.length; i++) {
//		if (newArray.includes(arr[i])) {
//			continue;
//		}
//		newArray.push(arr[i]);
//	}
//	return newArray;
//}

//console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5])); // 20
//console.log(getUniqueValues(["a", "b", "a", "c", "b"])); // 0

//function areObjectsEqual(ob1, ob2) {
//	let a = true;

//	for (const [key, value] of Object.entries(ob1)) {
//		if (ob2[key] !== value) {
//			a = false;
//		}
//	}
//	return a;
//}


//console.log(areObjectsEqual(
//	{ name: "Alice", age: 30 },
//	{ age: 30, name: "Alice" }
//)); // true

//console.log(areObjectsEqual(
//	{ name: "Alice", age: 30 },
//	{ name: "Alice", age: 31 }
//)); // false