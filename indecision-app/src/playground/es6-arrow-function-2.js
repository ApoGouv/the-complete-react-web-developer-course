// arguments object - no longer bound with arrow functions

// const add0 = function (a, b) {
//     console.log('arguments', arguments);
//     return a + b;
// };
// console.log('add0', add0(55, 6, 1001));


// const add = (a, b) => {
//     // console.log('arguments', arguments);
//     return a + b;
// };
// console.log('add', add(55, 6, 1001));

// this keyword - no longer bound

// const user = {
//     name: 'Apostolos',
//     cities: ['Larisa', 'Athens', 'Thessaloniki'],
//     printPlacesLived() {
//         // this.cities.forEach( (city) => {
//         //     console.log(`${this.name} has lived in ${city}`);
//         // });
//         return this.cities.map( (city) => `${this.name} has lived in ${city}` );
//     }
// };
// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map( (num) => num * this.multiplyBy );
    }
};
console.log(multiplier.multiply());

