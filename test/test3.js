
//Closure Practice

let passed = 3;

let addTo = function() {
  let inner = 2;
  return passed + inner;
}

if (verbose) {console.dir(addTo)};
if (verbose) {console.dir(addTo())};
passed = 4;
if (verbose) {console.dir(addTo())};



function Foo() {
    return this;
}

var a = Foo();       //returns window object
var b = new Foo();   //returns empty object of foo

a instanceof Window  // true
a instanceof Foo     // false

b instanceof Window  // false
b instanceof Foo     // true
