# Common Phrases
 
This is a package that will extract the most popular phrases out of an array of messages that is passed through. It also provides several dictionary utilities such as get the key with the highest value and getting the keys with the top values from a dictionary.

# Functionality:

This package provides two functions to work with phrases and retrieving them and two work with dictionaries.

The first phrase function `getAllPhrases` takes an array of strings as a parameter. It returns a dictionary with the phrases as the keys and the counts as the value.

The second phrase function `getTopPhrases` returns a list of objects that is the size of the parameter you pass through.

```
const CommonPhrases = require('CommonPhrases');

var example_messages = ["This is This is an example"];

var getAllResult = CommonPhrases.phrases.getAllPhrases(example_messages);

console.log(getAllResult); // { 'This is': 2, 'is This': 1, 'is an': 1, 'an example': 1 }

var getTopResults = CommonPhrases.phrases.getTopPhrases(1, example_messages);

console.log(getTopResults); // [ { phrase: 'This is', count: 2 } ]
```

The first dictionary function `getMaxKey` returns the key with the highest value.

The second dictionary function `getTopAmount` is the driver function to retrieve only a certain amount of top phrases.

```
const CommonPhrases = require('CommonPhrases');

var example_dict = {
	'This is': 25,
	'an example': 21
}

var maxKey = CommonPhrases.dict.getMaxKey(example_dict);

console.log(maxKey); // This is

var topAmount = CommonPhrases.dict.getTopAmount(1, example_dict);

console.log(topAmount); // [ { phrase: 'This is', count: 25 } ]
```

Added in v 1.1.1 was the variable length phrase generator. 

```
const CommonPhrases = require('CommonPhrases');

var example_messages = ["This is This is an example"];

var getAllResult = CommonPhrases.variablePhrases.getAllPhrasesVarLength(example_messages, 2); 
// New param is an integer of the phrase length you want

console.log(getAllResult); // { 'This is': 2, 'is This': 1, 'is an': 1, 'an example': 1 }

var getTopResults = CommonPhrases.variablePhrases.getTopPhrasesVarLength(1, example_messages, 2);

console.log(getTopResults); // [ { phrase: 'This is', count: 2 } ]
```

# Parameters and return values
```
phrases.getAllPhrases 
	- Params
		messages - Array of strings
		(optional) user_list - a list of phrases to not allow provided by the user
	- Returns
		dictionary of key/value pairs. Key = phrase, value = amount of times appeared

phrases.getTopPhrases
	- Params
		amount - an integer, the number of objects you want returned
		messages - Array of strings
		(optional) user_list - a list of phrases to not allow provided by the user
	- Returns
		list - list of objects that contain the phrase and count

dict.getMaxKey
	- Params
		dictionary - a JS object
	- Returns
		the key that had the max value, a string

dict.getTopAmount
	- Params
		amount - the number of top phrases to be returned
		dictionary - the object to be searched for the top phrases
	- Returns
		list - list of objects that contain the phrase and count

variablePhrases.getAllPhrasesVarLength
	- Params
		messages - Array of strings
		phrase_length - the length of the phrases to return
		(optional) user_list - the list of not allowed phrases
	- Returns
		dict of key/values pairs. Key = phrase, value = amount of times appeared.

variablePhrases.getTopPhrasesVarLength
	- Params
		amount - the amount of items to return
		message - Array of strings 
		phrase_length = the length of the phrases to return
		(optional) user_list - the list of not allowed phrases

```

# Version Updates

## V1.1.1
<ul>
	<li>Adding a check in getTopPhrases to ensure every message is defined in the event an undefined message gets passed through.</li>
	<li>Added in the variablePhrases file and functions</li>
</ul>

## v1.1.2
<ul>
	<li>Added in the ability to </li>
</ul>

# Planned Features:
<ul>
 	<li>Multiple sized phrases</li>
 	<li>More dictionary helpers</li>
</ul>