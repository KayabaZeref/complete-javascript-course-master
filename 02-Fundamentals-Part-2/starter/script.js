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