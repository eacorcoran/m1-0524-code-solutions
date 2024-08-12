const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
let reverseValues: number[] = [];

console.log('In Order:');
values.forEach((element) => console.log(element));

values.forEach((element) => (reverseValues = [element, ...reverseValues]));
console.log('Reverse Order:');
reverseValues.forEach((element) => console.log(element));
