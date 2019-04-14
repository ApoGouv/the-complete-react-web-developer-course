/************************
 * Object Destructuring
 * **********************/

// const person = {
//     name: 'Apostolis',
//     age: 32,
//     location: {
//         city: 'THessaloniki',
//         temp: 19
//     }
// };

// // const name = person.name;
// // const age = person.age;
// var { name, age } = person;
// console.log(`${name} is ${age}.`);

// var { name = 'Anonymous', age } = person;     // Destructuring with default value
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;    // Destructuring with renamed local variable
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// var { name: firstname = 'Anonymous', age } = person; // Destructuring with renamed local variable AND default value
// console.log(`${firstname} is ${age}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${publisherName}`); // Penguin or Self-Published


/************************
 * Array Destructuring
 * **********************/

const address = ['1299 S Jupiner Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , coffee_medium_price] = item;

console.log(`A medium ${coffee} costs ${coffee_medium_price}`);