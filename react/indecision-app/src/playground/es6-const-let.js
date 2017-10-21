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