"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clearArray = function clearArray(array) {
  var newArray = array.slice();
  while (newArray.length > 0) {
    newArray.pop();
  }
  return newArray;
};

exports.default = clearArray;