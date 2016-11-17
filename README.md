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

# To Do:
<ul>
	<li>Finish README properly</li>
	<li>Not allowed list (for phrases like 'or the')</li>
</ul>

# Planned Features:
<ul>
 	<li>Phrases of any size (greater than 2)</li>
 	<li>More dictionary helpers</li>
 	<li>Allow users to provide their own not allowed list</li>
</ul>