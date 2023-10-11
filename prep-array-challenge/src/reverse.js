/* exported reverse */
function reverse(array) {
  const reverseOrder = [];
  for (let i = array.length - 1; i > -1; i--) {
    reverseOrder.push(array[i]);
  }
  return reverseOrder;
}
