// Person class function, parent class
class Person {
     constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
     }

     // Greeting function that returns greeting with Person's name
     getGreeting() {
         return `Hi I am ${ this.name }!`;
     }

     // Description function that returns the information of a person
     getDescription() {
         return `${ this.name} is ${ this.age} year(s) old.`;
     }
}

// Student class, child class of Person
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    // return 
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let newGreeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            newGreeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return newGreeting;
    }
}

const me = new Traveler('Matthew Castillo', 28, 'California'); 
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Oregon'); 
console.log(other.getGreeting());