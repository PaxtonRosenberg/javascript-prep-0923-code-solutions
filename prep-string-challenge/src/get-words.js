/* exported getWords */
function getWords(string) {
  const newArray = string.split(' ');
  if (string === '') {
    return [];
  }
  return newArray;
}
