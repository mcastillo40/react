'use strict';

// es5 function
// function square(x) {
//     return x * x;
// }
// console.log(square(5));

// es6 arrow function
//const squareArrow = (a) => {
//    return a * a;
//};
// const squareArrow = (x) => x * x; 
// console.log(squareArrow(4));

var fullName = 'And Cas'; // Name of user

// Return the first name of user
var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

// Display firstname in console
console.log(getFirstName(fullName));

fullName = 'Mat Cas';

var getFirstName2 = function getFirstName2(name2) {
    return name2.split(' ')[0];
};

// Display firstname in console
console.log(getFirstName(fullName));
