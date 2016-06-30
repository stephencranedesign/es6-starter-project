/* calculator by Stephen Crane */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.calculator = global.calculator || {})));
}(this, function (exports) { 'use strict';

	/* test module */
	function add(a, b) {
		return a + b;
	}

	function subtract(a, b) {
		return a - b;
	}

	function multiply(a, b) {
		return a * b;
	}

	exports.add = add;
	exports.subtract = subtract;
	exports.multiply = multiply;

	Object.defineProperty(exports, '__esModule', { value: true });

}));