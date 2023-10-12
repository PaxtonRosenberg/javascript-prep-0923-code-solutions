/* exported isLowerCased */
function isLowerCased(word) {
  let lowerCase = false;
  if (word === word.toLowerCase()) {
    lowerCase = true;
  }
  return lowerCase;
}
