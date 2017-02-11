

var ranNum=Math.random();

// console.log(ranNum);

var array = [1, 2, 3, 4, 5];
var comeOn = 'Hi! ok';

var num1 = array.reduce(function(total, num){return total + num}, 0);
// console.log(num1);

// remove(comeOn);

var arrArr = [[1, 1, 1], [2, 3, 4], [5, 5, 5]]

stairsIn20(arrArr);
console.log(stairsIn20(arrArr));

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
