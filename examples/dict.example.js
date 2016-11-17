var dict = require('../lib/dictLogic');

var example_dict = {
	'This is': 25,
	'an example': 21
}

console.log('var dict = ' + JSON.stringify(example_dict));

console.log('getMaxKey(object)');

console.log('example: getMaxKey(dict)');

console.log('returns "' + dict.getMaxKey(example_dict)) + '"';

console.log('getTopAmount(amount, phrase_dict)');

console.log('example: getTopAmount(1, dict)');

console.log('returns "' + JSON.stringify(dict.getTopAmount(1, example_dict))) + '"';

console.log('end dict util so far');
