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

let fullName = 'And Cas'; // Name of user

// Return the first name of user
const getFirstName = (name) => {
    return name.split(' ')[0];
}

// Display firstname in console
console.log(getFirstName(fullName));

fullName = 'Mat Cas';

const getFirstName2 = (name2) => name2.split(' ')[0];

// Display firstname in console
console.log(getFirstName(fullName));