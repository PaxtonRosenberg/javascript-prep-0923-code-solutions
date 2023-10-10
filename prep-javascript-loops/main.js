// create your loops here.
function whileLoop1() {
  const arrayOfValues = [];

  let i = 0;

  while (i < 10) {
    arrayOfValues.push(i++);
  }

  return arrayOfValues;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const arrayOfValues = [];

  let i = 0;

  while (i < 19) {
    arrayOfValues.push(i);
    i += 2;
  }

  return arrayOfValues;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const arrayOfValues = [];

  for (let i = 0; i < 10; i++) {
    arrayOfValues.push(i);
  }

  return arrayOfValues;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > -1; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
}

forLoop2();

function forInLoop1(object) {
  const propertyNames = [];

  for (const x in object) {
    propertyNames.push(x);
  }
  return propertyNames;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const propertyValues = [];

  for (const x in object) {
    propertyValues.push(object[x]);
  }

  return propertyValues;
}

console.log('forInLoop2 output', forInLoop2(object));
