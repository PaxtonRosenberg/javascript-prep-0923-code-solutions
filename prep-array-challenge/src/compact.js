/* exported compact */
function compact(array) {
  const removeFalse = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      removeFalse.push(array[i]);
    }
  }
  return removeFalse;
}
