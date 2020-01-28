// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	var strRev = "";
	
	for (var i = 0; i <= str.length; i++) {
		strRev = str.charAt(i) + strRev;
	}
	
	return strRev;
}

module.exports = reverse;
