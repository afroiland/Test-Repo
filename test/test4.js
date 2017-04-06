
// Random Number Practice

let rn = Math.random();

console.log('rn: ', rn);
console.log('rn * 10: ', rn * 10);
// console.log('Math.floor(rn): ', Math.floor(rn));
console.log('Math.floor(rn * 10): ', Math.floor(rn * 10));

// To generate a random number between 1-10:
let someNum = Math.floor(Math.random() * 10) + 1;


// Testing some results
let total1s = 0;
let total2s = 0;
let total3s = 0;
let total4s = 0;
let total5s = 0;
let total6s = 0;
let total7s = 0;

function generateALot() {
  for (i = 0; i < 10000; i++) {
    let randomNum = Math.floor(Math.random() * 7) + 1;
    if (randomNum == 1) {
      total1s++;
    } else if (randomNum == 2) {
      total2s++;
    } else if (randomNum == 3) {
      total3s++;
    } else if (randomNum == 4) {
      total4s++;
    } else if (randomNum == 5) {
      total5s++;
    } else if (randomNum == 6) {
      total6s++;
    } else if (randomNum == 7) {
      total7s++;
    }
  }
}

generateALot();
console.log('total1s: ', total1s);
console.log('total2s: ', total2s);
console.log('total3s: ', total3s);
console.log('total4s: ', total4s);
console.log('total5s: ', total5s);
console.log('total6s: ', total6s);
console.log('total7s: ', total7s);
