// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
// const lastName = "Schmedtmann";
lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName2 = "Jonas";
const job2 = "teacher";
const birthYear2 = 1991;
const year2 = 2037;

const jonas = "I'm " + firstName2 + ", a " + (year2 - birthYear2) + " years old " + job2 + "!";
console.log(jonas);
// Using `` (template literals) instead of "" (quotes) or '' (apostrophes) for strings
const jonasNew = `I'm ${firstName2}, a ${year2 - birthYear2} years old ${job2}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");
console.log(`String
multiple
lines`);

//18: Taking Decisions: if / else Statements
const age3 = 15;
const isOldEnough = age3 >= 18;
if (isOldEnough) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age3;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear3 = 2012;
let century;
if (birthYear3 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// 20: Type Conversion and Coercion
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);

// 21: Truthy and Falsy Values
// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
// const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 123;
// let height = 0;
if (height) { // height is defined
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

// 22: Equality Operators: == vs. ===
// equality operators
const age4 = 18;
// strict equality operator (type + value)
// '18' === 18 -> false
if (age4 === 18) console.log("You just became an adult :D (strict)");
// loose equality operator (only value)
// '18' == 18 -> true
if (age4 == 18) console.log("You just became an adult :D (loose)");

// prompt function always returns a string
// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// For quick testing, you can use the following line instead of the prompt function
const favorite = 23;

if (favorite === 23) { // 23 === 23
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else if (favorite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

// != loose inequality operator
// !== strict inequality operator
if (favorite !== 23) console.log("Why not 23?");

// 23: Boolean Logic and 24: Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// Minimize the use of console.log for better performance
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}