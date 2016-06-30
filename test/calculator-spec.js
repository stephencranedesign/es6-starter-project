var assert = require('chai').assert;
var calculator= require('../dist/calculator.js');

describe('calculator', function() {

	describe('add', function() {
		it('should add two passed parameters together', function() {
			assert.equal(calculator.add(2,3), 5, 'hurray');
		});
	});

});