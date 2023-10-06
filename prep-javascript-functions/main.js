function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);

console.log('convertHoursToMinutes exercise:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('Paxton');

console.log('getGreeting exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMultiply = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5 exercise:', addMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyDivide = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 exercise:', multiplyDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers exercise:', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);

console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Paxton', 'Rosenberg');

console.log('getFullNameExercise:', fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeExample = cube(5);

console.log('cube exercise:', cubeExample);
