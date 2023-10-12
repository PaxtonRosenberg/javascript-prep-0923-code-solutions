/* exported isVowel */
function isVowel(char) {
  let isAVowel = false;
  const vowel = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

  for (let i = 0; i < vowel.length; i++) {
    if (vowel[i] === char) {
      isAVowel = true;
    }
  }
  return isAVowel;
}
