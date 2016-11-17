'use strict';
/**
    Tests for the phrases file
**/

const expect = require('chai').expect;
const phrases = require('../lib/phrases');

const MissingParametersError = require('../lib/errors/MissingParametersError');
const EmptyParameterError = require('../lib/errors/EmptyParameterError');

describe('Test phrases file', () => {

	describe('getAllPhrases()', () => {
		it('should return the entire dictionary of phrases', (done) => {
			var messages = ['This is test'];

			var expected = {
				'This is': 1,
				'is test': 1
			};
			var result = phrases.getAllPhrases(messages);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return an empty parameter exception if passed an empty array', (done) => {
			var result = phrases.getAllPhrases([]);

			expect(result).to.be.an.instanceof(EmptyParameterError);
			done();
		});

		it('should return a missing parameter exception if passed no messages', (done) => {
			var result = phrases.getAllPhrases(null);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});
	});

	describe('getTopPhrases()', () => {
		it('should return the top phrases', (done) => {
			var messages = ['This is test'];

			var expected = [
				{'phrase': 'This is', 'count': 1}
			];

			var result = phrases.getTopPhrases(1, messages);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return the top phrases with amount of 3', (done) => {
			var messages = ['This is test'];

			var expected = [
				{'phrase': 'This is', 'count': 1},
				{'phrase': 'is test', 'count': 1}
			];

			var result = phrases.getTopPhrases(2, messages);
			
			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return an empty parameter exception if passed an empty array', (done) => {
			var result = phrases.getTopPhrases(1, []);

			expect(result).to.be.an.instanceof(EmptyParameterError);
			done();
		});

		it('should return a missing parameter exception if passed no messages', (done) => {
			var result = phrases.getTopPhrases(1, null);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});

		it('should return a missing parameter exception if passed no amount', (done) => {
			var result = phrases.getTopPhrases(null, []);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});
	});
});