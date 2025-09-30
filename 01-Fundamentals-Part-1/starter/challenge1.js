/* Write your code below. Good luck! 🙂 */

let massMark, heightMark, massJohn, heightJohn;

// TEST DATA 1 
/*
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95
*/

// TEST DATA 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;


let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);
console.log("Is Mark Higher than John: " + markHigherBMI);
