/* exported capitalize */
function capitalize(word) {
  let capFirstChar = '';
  for (let i = 0; i < word.length; i++)
    if (i === 0) {
      capFirstChar += word.charAt(i).toUpperCase();
    } else {
      capFirstChar += word.charAt(i).toLowerCase();
    }
  return capFirstChar;
}
