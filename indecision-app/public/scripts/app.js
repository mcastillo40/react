'use strict';

// Arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments); // Display all arguments
    return a + b;
};
//console.log(add(5, 10, 1000));

// Cannot use 'arguments' in es6
var newAdd = function newAdd(x, y) {
    return x + y;
};
//console.log(newAdd(5, 15, 1000));

// this keyword - no longer bound
var user = {
    name: 'Matt',
    cities: ['Orange', 'Irvine', 'Seattle', 'Portland'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
//console.log(user.printPlacesLived());

var multiplier = {
    number: [2, 4, 5],
    multiplyBy: 5,
    multiply: function multiply() {
        return 0;
    }
};
