const person = {
  firstName: 'Paxton',
  lastName: 'Rosenberg',
  hobby: 'Basketball',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Athlete';
console.log("The person's current job is:", person.job);
person['previousJob'] = 'Waiter';
console.log("The person's previous job is:", person['previousJob']);
console.log(person);
