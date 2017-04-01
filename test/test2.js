
//ES6 Principles and Practice

let verbose = false;

let oldAdd = function(a, b) {return a + b};
let newAdd = (a, b) => a + b;
if (verbose) {console.log('oldAdd(1, 2): ', oldAdd(1, 2))};
if (verbose) {console.log('newAdd(3, 4): ', newAdd(3, 4))};

let fff = () => console.log('fff got called');
// fff();

// setTimeout( () => console.log('2 second timeout'), 2000);

function increment() {
  this.number = 0;
  setInterval( () => {this.number++; console.log(this.number);}, 1000);
}
// let incr = new increment();

let switchItUp = n => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n];
if (verbose) {console.log(switchItUp(3))};

let testArray2a = [1, -2, 5, 14, 8, 3];

const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);
if (verbose) {console.log(min2(testArray2a))};
if (verbose) {console.log(max2(testArray2a))};
