/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const x in object) {
    keys.push(x);
  }
  return keys;
}
