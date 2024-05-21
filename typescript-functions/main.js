'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(
  `The result of convertingMinutesToSeconds(5) is ${convertMinutesToSeconds(
    5
  )}.`
);
console.log(
  `The result of convertingMinutesToSeconds(10) is ${convertMinutesToSeconds(
    10
  )}.`
);
function greet(name) {
  return `Hey ${name}!`;
}
console.log(`The result of greet('Beavis') is "${greet('Beavis')}".`);
console.log(`The result of greet('SpongeBob') is "${greet('SpongeBob')}".`);
const getArea = (width, height) => {
  return width * height;
};
console.log(`The result of getArea(17,42) is ${getArea(17, 42)}.`);
console.log(`The result of getArea(22,38) is ${getArea(22, 38)}.`);
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  `The result of getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }) is ${getFirstName(
    {
      firstName: 'Lelouche',
      lastName: 'Lamperouge',
    }
  )}.`
);
console.log(
  `The result of getFirstName({ firstName: 'John', lastName: 'Henry' }) is ${getFirstName(
    {
      firstName: 'John',
      lastName: 'Henry',
    }
  )}.`
);
const getLastElement = (array) => {
  const lastindex = array.length - 1;
  return array[lastindex];
};
console.log(
  `The last element of ['propane', 'and', 'propane', 'accessories'] is ${getLastElement(
    ['propane', 'and', 'propane', 'accessories']
  )}.`
);
console.log(
  `The last element of [true, true, false, true] is ${getLastElement([
    true,
    true,
    false,
    true,
  ])}.`
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  `The result of callOtherFunction(convertMinutesToSeconds, 10) is ${callOtherFunction(
    convertMinutesToSeconds,
    10
  )}.`
);
console.log(
  `The result of callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']) is ${callOtherFunction(
    getLastElement,
    ['hello', 'Goodbye', 'Aloha']
  )}.`
);
