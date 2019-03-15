// import './utils.js';
import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log('app.js is running!!!');
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 81));

console.log('isAdult: ', isAdult(17));
console.log('canDrink: ', canDrink(31));
console.log('isSenior: ', isSenior(70));