'use strict';
/**
    Tests for the dictLogic file
**/

const expect = require('chai').expect;
const dictLogic = require('../lib/dictLogic');

const MissingParametersError = require('../lib/errors/MissingParametersError');
const EmptyParameterError = require('../lib/errors/EmptyParameterError');

describe('Test dictLogic file', () => {

	describe('getMaxKey', () => {
		it('should return the key with the highest value with one highest value', (done) => {
			var testObj = {
				'Test Obj': 32,
				'Another Obj': 20,
				'herp derp': 12
			};

			var expected = 'Test Obj';
			var result = dictLogic.getMaxKey(testObj);

			expect(result).to.equal(expected);
			done();
		});

		it('should return the key with the highest value with multiple highest value', (done) => {
			var testObj = {
				'Test Obj': 32,
				'Another Obj': 32,
				'herp derp': 12
			};

			var expected = 'Test Obj';
			var result = dictLogic.getMaxKey(testObj);

			expect(result).to.equal(expected);
			done();
		});

		it('should return the key with the highest value with one value', (done) => {
			var testObj = {
				'Test Obj': 32
			};

			var expected = 'Test Obj';
			var result = dictLogic.getMaxKey(testObj);

			expect(result).to.equal(expected);
			done();
		});

		it('should throw an empty parameter error', (done) => {
			var emptyDict = {};

			var result = dictLogic.getMaxKey(emptyDict);

			expect(result).to.be.an.instanceof(EmptyParameterError);
			done();
		});

		it('should throw a missing parameter exception', (done) => {
			var result = dictLogic.getMaxKey(null);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});
	});

	describe('getTopAmount', () => {
		it('should return the top 2 phrases from the provided dict', (done) => {
			var dict = {
				'Test Obj': 32,
				'Another Obj': 22,
				'herp derp': 12
			};

			var expected = [{'phrase': 'Test Obj', 'count': 32}, {'phrase': 'Another Obj', 'count': 22}];
			var result = dictLogic.getTopAmount(2, dict);

			expect(result).to.deep.equal(expected);
			done();
		});

		it('should return the top 2 phrases from the provided dict although amount param is higher', (done) => {
			var dict = {
				'Test Obj': 32,
				'Another Obj': 22
			};

			var expected = [{'phrase': 'Test Obj', 'count': 32}, {'phrase': 'Another Obj', 'count': 22}];
			var result = dictLogic.getTopAmount(3, dict);

			expect(result).to.deep.equal(expected);
			done();
		});

		it('should throw a missing parameter exception with no amount provided', (done) => {
			var dict = {};
			var result = dictLogic.getTopAmount(null, dict);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});

		it('should throw a missing parameter exception with no dict provided', (done) => {
			var result = dictLogic.getTopAmount(2, null);

			expect(result).to.be.an.instanceof(MissingParametersError);
			done();
		});

		it('should throw an empty parameter error', (done) => {
			var emptyDict = {};

			var result = dictLogic.getTopAmount(2, emptyDict);

			expect(result).to.be.an.instanceof(EmptyParameterError);
			done();
		});
	});
})