
var name = 'Action Jackson';

console.log(name.split(' '));

var first_name = name.split(' ')[0];
console.log(first_name);

var last_name = name.split(' ').slice(-1).join(' ');
console.log(last_name);
