const width: number = 10;
const height: number = 2;
const area: number = width * height;

console.log('value of area:', area);
console.log('type of area:', typeof area);

const bill: number = 99.5;
const payment: number = 100;
const change: number = payment - bill;

console.log('value of change:', change);
console.log('type of change:', typeof change);

const quizzes: number = 90;
const midterm: number = 82;
const final: number = 92;
const grade: number = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

const firstName: string = 'Erin';
const lastName: string = 'Corcoran';
const fullName: string = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const pH: number = 10;
const isAcidic: boolean = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const headCount: number = 250;
const isSparta: boolean = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);
