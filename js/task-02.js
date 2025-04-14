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

function firstUniqueChar(str) {
	str = str.trim();
	const counter = {};

	for (const char of str) {
		if (char === ' ') continue;
		counter[char] = (counter[char] || 0) + 1;
	}

	let minChar = null;
	let minCount = 1;

	for (const char in counter) {
		if (counter[char] === minCount) {
			minChar = char;
			break;
		}
	}

	console.log(`Менше всього букви "${minChar}"`);
}


firstUniqueChar("abacabad");
firstUniqueChar("aabbcc");