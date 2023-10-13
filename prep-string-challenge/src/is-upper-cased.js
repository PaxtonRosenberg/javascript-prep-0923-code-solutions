/* exported isUpperCased */
function isUpperCased(word) {
  let upperCase = true;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toLowerCase()) {
      upperCase = false;
    }
  }
  return upperCase;
}
