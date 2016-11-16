/*
The MIT License (MIT)
Original Library 
  - Copyright (c) Marak Squires
Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const request = require('request-promise');
const moment = require('moment');
const _ = require('lodash');

module.exports = {
	getMaxKey,
	getTopAmount
}

/**
 * Dictionary helper function that returns the key that has the max value in the dictionary.
 * @params dict - the dictionary to find the key with the max value from
 * @returns key - the key with the highest value 
 */
function getMaxKey (dict) {
    var v = _.values(dict);
    var k = Object.keys(dict);
    return k[v.indexOf(Math.max.apply(null, v))];
}

/**
 * Dictionary helper function that returns an array of top phrase objects.
 * @params amount - The amount of items in the list you want returned
 * @params phrase_dict - the dictionary of phrases to sort through
 * @returns list - list of objects that contain the top phrases and the counts for them (sorted).
 */
function getTopAmount (amount, phrase_dict) {
    var top_phrases = [];

    for (var i = 0; i < amount; i++) {
        var most_used = getMaxKey(phrase_dict);
        var value = phrase_dict[most_used];

        // create an array of top phrases to return
        top_phrases.push({
            phrase: most_used,
            count: value
        });

        // delete the current top one so we can find the next one
        delete phrase_dict[most_used];
    }

    return top_phrases;
}