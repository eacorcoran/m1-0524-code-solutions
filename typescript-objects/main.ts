interface studentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: studentProps = {
  firstName: 'Erin',
  lastName: 'Corcoran',
  age: 36,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Product Manager';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

const vehicle: Vehicle = {
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

const pet: Pet = {
  name: 'Oakley',
  kind: 'Cockapoo',
};

delete pet.name;
delete pet.kind;

console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
