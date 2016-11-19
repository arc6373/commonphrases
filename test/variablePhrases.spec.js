'use strict';
/**
    Tests for the phrases file
**/

const expect = require('chai').expect;
const phrases = require('../lib/variablePhrases');

const MissingParametersError = require('../lib/errors/MissingParametersError');
const EmptyParameterError = require('../lib/errors/EmptyParameterError');

describe('Test variablePhrases file', () => {

	describe('getAllPhrasesVarLength()', () => {
		it('should return the entire dictionary of phrases with phrase len 2', (done) => {
			var messages = ['This is test'];

			var expected = {
				'This is': 1,
				'is test': 1
			};
			var result = phrases.getAllPhrasesVarLength(messages, 2);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return the entire dictionary of phrases with phrase len 3', (done) => {
			var messages = ['This is a test'];

			var expected = {
				'This is a': 1,
				'is a test': 1
			};
			var result = phrases.getAllPhrasesVarLength(messages, 3);
			
			expect(result).to.deep.equal(expected);
			done();
		});


		it('should return an empty parameter exception if passed an empty array with phrase len 2', (done) => {
			var result = phrases.getAllPhrasesVarLength([], 2);

			expect(result).to.be.an.instanceof(EmptyParameterError);
			done();
		});

		it('should return a missing parameter exception if passed no messages with phrase len 2', (done) => {
			var result = phrases.getAllPhrasesVarLength(null, 2);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});
	});

	describe('getTopPhrasesVarLength()', () => {
		it('should return the top phrases with len 2', (done) => {
			var messages = ['This is test'];

			var expected = [
				{'phrase': 'This is', 'count': 1}
			];

			var result = phrases.getTopPhrasesVarLength(1, messages, 2);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return the top phrases with len 2 even with an undefined message', (done) => {
			var messages = ['This is test', undefined];

			var expected = [
				{'phrase': 'This is', 'count': 1}
			];

			var result = phrases.getTopPhrasesVarLength(1, messages, 2);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return the top phrases with len 2 with amount of 2', (done) => {
			var messages = ['This is test'];

			var expected = [
				{'phrase': 'This is', 'count': 1},
				{'phrase': 'is test', 'count': 1}
			];

			var result = phrases.getTopPhrasesVarLength(2, messages, 2);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return the top phrases with len 3 with amount of 2', (done) => {
			var messages = ['This is a test'];

			var expected = [
				{'phrase': 'This is a', 'count': 1},
				{'phrase': 'is a test', 'count': 1}
			];

			var result = phrases.getTopPhrasesVarLength(2, messages, 3);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return an empty parameter exception if passed an empty array', (done) => {
			var result = phrases.getTopPhrasesVarLength(1, [], 2);

			expect(result).to.be.an.instanceof(EmptyParameterError);
			done();
		});

		it('should return a missing parameter exception if passed no messages', (done) => {
			var result = phrases.getTopPhrasesVarLength(1, null, 2);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});

		it('should return a missing parameter exception if passed no amount', (done) => {
			var result = phrases.getTopPhrasesVarLength(null, [], 2);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});
	});
});