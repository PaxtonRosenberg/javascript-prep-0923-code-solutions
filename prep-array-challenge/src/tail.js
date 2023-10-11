/* exported tail */
function tail(array) {
  const removeFirstElement = [];
  for (let i = 1; i < array.length; i++) {
    removeFirstElement.push(array[i]);
  }
  return removeFirstElement;
}
