

var ranNum=Math.random();

// console.log(ranNum);

var array = [1, 2, 3, 4, 5];
var comeOn = 'Hi! ok';
var someStuff = 'I am the very model of a modern major general.';
var cheeky = 'abcdefghijklmnopqrstuvwxyz';
var eee = 'eeeeeeee';

var num1 = array.reduce(function(total, num){return total + num}, 0);
// console.log(num1);
var arrArr = [[1, 1, 1], [2, 3, 4], [5, 5, 5]];

// remove(comeOn);
// stairsIn20(arrArr);

// console.log(testSubStr(someStuff, 6));
// console.log(testSubStr(cheeky, 3));
// console.log(replaceNth(eee, 3, 'e', 'x'));

function testSubStr(test, index) {
  test = test.substring(0, index) + ' boat ' + test.substring(index+1);
  return test;
}

function replaceNth(text, n, oldValue, newValue) {
  var toIndex = 1;
  for (i = 0; i < text.length; i++) {
    if (text.charAt(i) == oldValue && toIndex == n) {
      text = text.substring(0, i) + newValue + text.substring(i+1);
      toIndex = 1;
    } else if (text.charAt(i) == oldValue) {
      toIndex++;
    }
  }
  return text;
}



function stairsIn20(s) {
  console.log('s: ', s);
  console.log(s[1][0]);
  var total = 0;
  for (i = 0; i < s.length; i++) {
    for (j = 0; j < s[i].length; j++) {
      total += s[j][i];
    }
  }
  return total;
}


function remove(string) {
  var words = string;
  console.log(words);
  words = words.replace(/!/g, '');
  console.log(words);
  words += '!';
  console.log(words);
  return words;
}

function squareOrSquareRoot(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
    newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(Math.pow(array[i], 2));
    }
  }
  return newArray;
}

function countPositivesSumNegatives(array) {
  console.log('array: ', array);
  var val1 = 0;
  var val2 = 0;
  if (array === null || array === 0 || array === undefined) {
    return [];
  } else {
    for (i = 0; i < array.length; i++) {
      if (array[i] >= 0) {
        val1++;
      } else {
        val2 += array[i];
      }
    }
    return [val1, val2];
  }
}
