// 02-Fundamentals-Part-2/starter/script.js
// 33. Activating Strict Mode
// strict mode helps you write cleaner code, 
// like preventing you from using undeclared variables.
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // reserved word
// const private = 534; // reserved word

// 34. Functions
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
// logger();
// logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

// 35. Function Declarations vs. Expressions
// Function Declaration
// can be called before its declaration
// const age1 = calcAge1(1991);
// This works because of hoisting
function calcAge1(birthYear) {
    return 2037 - birthYear;
};
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// 36. Arrow Functions
// Arrow function expression
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// 37. Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

// const cutFruitPieces = fruit => fruit * 4;

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// 38. Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

// 40. Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'] // This will error because friends is a const

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge4 = function (birthYear) {
//     return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age4 = calcAge4(years[0]);
// const age5 = calcAge4(years[1]);
// const age6 = calcAge4(years[years.length - 1]);
// console.log(age4, age5, age6);

// const ages = [
//     calcAge4(years[0]),
//     calcAge4(years[1]),
//     calcAge4(years[years.length - 1])
// ];
// console.log(ages);

// 41. Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];
// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// // Add elements to the beginning
// friends.unshift('John');
// console.log(friends);

// // Remove elements
// // Remove last
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// // Remove first
// friends.shift();
// console.log(friends);

// // Get indexes, return the index of the element
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// // Includes, which returns boolean
// friends.push(23);
// console.log(friends);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// friends.includes('Michael') ? console.log('You have a friend called Michael') : console.log('No friend called Michael');

// 42. Introduction to Objects
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// 43. Dot vs. Bracket Notation
// The jonnas object from previous lesson
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// // first + nameKey = firstName
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // // User answer is stored in interestedIn variable
// // if (jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// 44. Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    // hasDriversLicense: false,
    hasDriversLicense: true,

    // First way
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // Second way
    // calcAge: function () {
    //     // Why not jonas.birthYear?
    //     // because this key word points to the object calling the method
    //     // If we use jonas.birthYear, and change to jonas2 later, it will still point to jonas object
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    // Third way, storing the value in the object itself
    calcAge: function () {
        //this will create a new key age in jonas object
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    }
};

// First way
// console.log(jonas.calcAge(jonas.birthYear));

// Second way
// console.log(jonas.calcAge());

// Third way
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);


// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());