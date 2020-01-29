// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

	//My solution/course solution 2:
	let reversed = "";
	for (let character of str) {	
		reversed = character + reversed;
	}
	return reversed;

	//Course solution 1:
	// return str.split('').reverse().join('');

	//Course solution 3 - most advanced use of helpers:
	// return str.split('').reduce((reversed, character) => character + reversed, '');

}


module.exports = reverse;
