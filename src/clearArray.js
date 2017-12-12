const clearArray = function(array) {
  if (array.constructor !== Array) throw "Not an array";
  while (array.length > 0) {
    array.pop();
  }
  return array;
};

export default clearArray;
