const clearArray = function(array) {
  const newArray = array.slice();
  while (newArray.length > 0) {
    newArray.pop();
  }
  return newArray;
};

export default clearArray;
