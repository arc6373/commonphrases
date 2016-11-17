var phrases = require('../lib/phrases');

var example_messages = ["This is an example"];

console.log('var example_messages = ' + example_messages);

console.log('getAllPhrases(messages)');

console.log('example: getAllPhrases(example_messages)');

console.log('returns "' + JSON.stringify(phrases.getAllPhrases(example_messages))) + '"';

console.log('getTopPhrases(amount, messages)');

console.log('example: getTopPhrases(1, example_messages)');

console.log('returns "' + JSON.stringify(phrases.getTopPhrases(1, example_messages))) + '"';

console.log('end phrases so far');
