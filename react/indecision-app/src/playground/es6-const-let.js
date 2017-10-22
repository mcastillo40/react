// Var variables allow you to reassign and redefine variable
// which may lead to complications
var nameVar = 'Matt';
var nameVar = 'new Name';
console.log('nameVar: ', nameVar);

// Cannot redifine let variables
let nameLet = 'And';
nameLet = 'again'; 
console.log('nameLet: ', nameLet);

// cannot redifine or reassign const variable
const nameConst = 'james';
console.log('nameConst: ', nameConst);

// Block scoping (Let and Const are specific to a block; var isn't)

const fullName = 'Matthew Castillo';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);