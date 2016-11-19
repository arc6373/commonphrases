var phrases = require('../lib/variablePhrase');

var example_messages = ["This is an example"];

console.log('var example_messages = ' + example_messages);

console.log('getAllPhrasesVarLength(messages, phrase_length)');

console.log('example: getAllPhrasesVarLength(example_messages, 3)');

console.log('returns "' + JSON.stringify(phrases.getAllPhrasesVarLength(example_messages, 3))) + '"';

console.log('getTopPhrasesVarLength(amount, messages, phrase_length)');

console.log('example: getTopPhrasesVarLength(1, example_messages, 3)');

console.log('returns "' + JSON.stringify(phrases.getTopPhrasesVarLength(1, example_messages, 3))) + '"';

console.log('end phrases so far');
