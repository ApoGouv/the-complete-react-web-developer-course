
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // Logical NOT operator
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let gretting = super.getGretting();

        if (!!this.homeLocation) {
            gretting += ` I'm visiting from ${this.homeLocation}`;
        }
        return gretting;
    }
}

const me = new Student('Apo Gouv', 31, 'Computer Science');
console.log(me);
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.getDescription());
console.log(other.getGretting());

const chrysa = new Traveller('Chrysa', 31, 'Larissa');
console.log(chrysa);
console.log(chrysa.getGretting());