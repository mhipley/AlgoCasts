// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

	////My solution:
	// let reversed = "";
	// for (let char of str) {
	// 	reversed = char + reversed;
	// }
	// if (reversed == str) {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }

	////Course solution 1 - most straightforward:
	//const reversed = str.split('').reverse().join('');

	////(Boolean statement - returns true if the two constants are equal & false if not.)
	//return str === reversed;

	////Course solution 2 - using .every() helper, but not ideal (redundant)
	////(useful as a way to show that you can tell when a solution is suboptimal)
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];

	});


}

module.exports = palindrome;
