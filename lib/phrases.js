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
'use strict';

const MissingParametersError = require('./errors/MissingParametersError');
const EmptyParameterError = require('./errors/EmptyParameterError');
const dictUtil = require('./dictLogic.js');

const _ = require('lodash');

module.exports = {
    getAllPhrases,
    getTopPhrases
}

var disallowed_phrases = [];


/**
 * Phrases function that gets all the phrases and puts them into a dictionary with their appearance count
 * @params messages - an array of string messages to turn into a phrase dictionary
 * @returns object - a dictionary that has all the phrases and their counts as key value pairs.
 */
function getAllPhrases (messages, user_list) {
    disallowed_phrases = user_list || disallowed_phrases;

    if(!messages){
        return new MissingParametersError('messages');
    }

    if(messages.length === 0){
        return new EmptyParameterError();
    }

    var final_dict = {};

    _.forEach(messages, function (message) {

        // Make sure the message is not undefined
        if (message) {
            message = message.replace(/[,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');

            var split_message = message.split(' ');
            var phrases = [];

            for (var i = 0; i < split_message.length - 1; i++) {
                phrases.push(split_message[i] + ' ' + split_message[i + 1]);
            }

            _.forEach(phrases, function (phrase) {
                if (disallowed_phrases.indexOf(phrase) == -1) {
                    final_dict[phrase] = (final_dict[phrase] || 0) + 1;
                }
            });
        }
    });

    return final_dict;
}


/**
 * Phrases function that gets a certain number of the top phrases. (number is provided)
 * @params amount - the amount of items to be returned to the user
 * @params messages - the messages to turn into a dictionary and get the top phrases from
 * @returns list - the top phrases in a list with objects that contain key value pairs.
 */
function getTopPhrases (amount, messages, user_list) {
    disallowed_phrases = user_list || disallowed_phrases;

    if(!amount || !messages){
        return new MissingParametersError(['amount', 'message']);
    }

    if(messages.length === 0){
        return new EmptyParameterError();
    }

    var allPhrases = getAllPhrases(messages);
    return dictUtil.getTopAmount(amount, allPhrases);
}