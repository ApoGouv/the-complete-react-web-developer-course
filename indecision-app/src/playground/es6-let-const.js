var nameVar = 'Tolios';
var nameVar = 'Gordos';

console.log('nameVar', nameVar);

let nameLet = 'Chrysa';
nameLet = 'Kpisouga';
console.log('nameLet', nameLet);

const nameConst = 'Gordoutsos';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Apostolos Gouvalas';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);