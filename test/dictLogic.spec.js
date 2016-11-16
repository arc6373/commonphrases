'use strict';
/**
    Tests for the dictLogic file
**/

const expect = require('chai').expect;
const dictLogic = require('../lib/dictLogic');

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
		})
	})
})