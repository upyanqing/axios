'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap(...args) {
    
    return fn.apply(thisArg, args);
  };
};
