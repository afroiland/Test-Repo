
// Random Number Practice

let rn = Math.random();

console.log('rn: ', rn);
console.log('rn * 10: ', rn * 10);
// console.log('Math.floor(rn): ', Math.floor(rn));
console.log('Math.floor(rn * 10): ', Math.floor(rn * 10));

// To generate a random number between 1-10:
let someNum = Math.floor(Math.random() * 10) + 1;
console.log('someNum: ', someNum);


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

// generateALot();
// console.log('total1s: ', total1s);
// console.log('total2s: ', total2s);
// console.log('total3s: ', total3s);
// console.log('total4s: ', total4s);
// console.log('total5s: ', total5s);
// console.log('total6s: ', total6s);
// console.log('total7s: ', total7s);


// More testing

let total0sb = 0;
let total1sb = 0;
let total2sb = 0;
let total3sb = 0;
let total4sb = 0;
let total5sb = 0;
let total6sb = 0;
let total7sb = 0;
let total8sb = 0;
let total9sb = 0;

function ok() {
  for (i = 0; i < 10000; i++) {
    switch (Math.floor(Math.random() * 10)) {
      case 0:
      total0sb++;
      break;
      case 1:
      total1sb++;
      break;
      case 2:
      total2sb++;
      break;
      case 3:
      total3sb++;
      break;
      case 4:
      total4sb++;
      break;
      case 5:
      total5sb++;
      break;
      case 6:
      total6sb++;
      break;
      case 7:
      total7sb++;
      break;
      case 8:
      total8sb++;
      break;
      case 9:
      total9sb++;
      break;
    }
  }
}

ok();
console.log('total0sb: ', total0sb);
console.log('total1sb: ', total1sb);
console.log('total2sb: ', total2sb);
console.log('total3sb: ', total3sb);
console.log('total4sb: ', total4sb);
console.log('total5sb: ', total5sb);
console.log('total6sb: ', total6sb);
console.log('total7sb: ', total7sb);
console.log('total8sb: ', total8sb);
console.log('total9sb: ', total9sb);
