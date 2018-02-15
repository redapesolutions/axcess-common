(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.axcessCommon = {})));
}(this, (function (exports) { 'use strict';

const addToHistoryN = n => (value, old) => [value, ...old.filter(h => h !== value).slice(0, n - 1)];

const addToHistory = addToHistoryN(10);

exports.addToHistoryN = addToHistoryN;
exports.addToHistory = addToHistory;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
