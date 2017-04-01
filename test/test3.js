
//Closure Practice

let passed = 3;

let addTo = function() {
  let inner = 2;
  return passed + inner;
}

console.dir(addTo);
console.dir(addTo());
passed = 4;
console.dir(addTo());
