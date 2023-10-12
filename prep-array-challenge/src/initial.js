/* exported initial */
function initial(array) {
  const removeLastElement = [];
  for (let i = 0; i < array.length - 1; i++) {
    removeLastElement.push(array[i]);
  }
  return removeLastElement;
}
