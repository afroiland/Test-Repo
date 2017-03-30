
//ES6 Principles and Practice

let oldAdd = function(a, b) {return a + b};
let newAdd = (a, b) => a + b;
console.log('oldAdd(1, 2): ', oldAdd(1, 2));
console.log('newAdd(3, 4): ', newAdd(3, 4));

let fff = () => console.log('fff');
fff();
