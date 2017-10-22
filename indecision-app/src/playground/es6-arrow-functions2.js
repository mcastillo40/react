// Arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments); // Display all arguments
    return a + b;
};
//console.log(add(5, 10, 1000));

// Cannot use 'arguments' in es6
const newAdd = (x, y) => x + y; 
//console.log(newAdd(5, 15, 1000));

// this keyword - no longer bound
const user = {
    name: 'Matt',
    cities: ['Orange', 'Irvine', 'Seattle', 'Portland'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
//console.log(user.printPlacesLived());

const multiplier = {
    number: [2, 4, 5],
    multiplyBy: 5,
    multiply() {
        return 0; 
    }
};