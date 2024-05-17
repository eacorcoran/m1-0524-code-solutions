'use strict';
const student = {
  firstName: 'Erin',
  lastName: 'Corcoran',
  age: 36,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Product Manager';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
const vehicle = {
  make: 'Jeep',
  model: 'Grand Cherokee',
  year: 2018,
};
vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
const pet = {
  name: 'Oakley',
  kind: 'Cockapoo',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
