/* Write your code below. Good luck! 🙂 */

// Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

let scoreDolphins;
let scoreKoalas;

scoreDolphins = 96;
// scoreDolphins = 108;
// scoreDolphins = 89;

scoreKoalas = 88;
// scoreKoalas = 91;
// scoreKoalas = 110;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

// Bonus 1
// if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
//     console.log("Dolphins win the trophy");
// } else if ((scoreDolphins < scoreKoalas) && (scoreKoalas >= 100)) {
//     console.log("Koalas win the trophy");
// } else if ((scoreDolphins === scoreKoalas) && (scoreDolphins >= 100) && (scoreKoalas >= 100)) {
//     console.log("Both win the trophy");
// }