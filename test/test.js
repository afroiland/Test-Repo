

var ranNum=Math.random();
// console.log(ranNum);

var testArray = [1, 2, 5, 4, 8, 3];
var testArray2 = [1, -2, 5, 14, 8, 3];
var testArray3 = [1, 2, 5, 4, 8, 3];
var testArray4 = [1, 2, 5, 4, 8, 3];
var testArray5 = [1, 2, 5, 4, 8, 3];
var comeOn = 'Hi! ok';
var someStuff = 'I am the very model of a modern major general.';
var cheeky = 'abcdefghijklmnopqrstuvwxyz';
var eee = 'eeeeeeee';

var num1 = testArray.reduce(function(total, num){return total + num}, 0);
// console.log(num1);
var arrArr = [[1, 1, 1], [2, 3, 4], [5, 5, 5]];

var basketballResults = [
  ['Golden State Warriors', '559:503'],
  ['Memphis Grizzlies', '550:511'],
  ["Los Angeles 9nines","150:813"],
  ['Portland Trail Blazers', '527:520'],
  ['Houston Rockets', '494:458'],
  ['San Antonio Spurs', '469:460'],
  ['Phoenix Suns', '523:522'],
  ['Minnesota Timberwolves', '495:494'],
  ['Utah Jazz', '399:402'],
  ['Sacramento Kings', '420:431'],
  ['Denver Nuggets', '646:658'],
  ['Los Angeles Clippers', '382:422'],
  ['Dallas Mavericks', '492:513'],
  ['Los Angeles Lakers', '641:637'],
  ['Oklahoma City Thunder', '315:318'],
  ['New Orleans Pelicans', '433:454']
];

// remove(comeOn);
// stairsIn20(arrArr);

// console.log(testSubStr(someStuff, 6));
// console.log(testSubStr(cheeky, 3));
// console.log(replaceNth(eee, 3, 'e', 'x'));

// console.log("Sorting: ", testArray.sort());
// console.log("Sorting and popping: ", testArray.sort().shift());
// console.log(sumArray(testArray2));
// console.log("how how how", typeof(NaN));
// console.log("LA Points: ", getLosAngelesPoints(basketballResults));
// console.log("Chickens, Cows: ", animals(72, 200));
// console.log("Chickens, Cows: ", animals(12, 24));
// console.log("Chickens, Cows: ", animals(25, 555));
// console.log("howMuchILoveYou(50)", howMuchILoveYou(50));


function howMuchILoveYou(nbPetals) {
  for (i = nbPetals; i > 6; i -= 6) {
    console.log(i);
  }
  if (i === 1) {
    return "I love you";
  } else if (i === 2) {
    return "a little";
  } else if (i === 3) {
    return "a lot";
  } else if (i === 4) {
    return "passionately";
  } else if (i === 5) {
    return "madly";
  } else if (i === 6) {
    return "not at all";
  }
}

function animals(heads, legs){
  var chickens = 0;
  var cows = heads;
  if (heads === 0) {
    return [0, 0];
  } else if (heads == (legs/4)) {
    return [chickens, cows];
  } else {
    if (heads > (legs/4)) {
      for (i = 0; (chickens*2 + cows*4 != legs); i++) {
        chickens ++;
        cows --;
      }
    }
  }
  return [chickens, cows];
}

function getLosAngelesPoints(results) {
  var num = 0;
  var colonIndex = 0;
  for (i = 0; i < results.length; i++) {
    console.log("Team Name: ", results[i][0].slice(0, 12));
    console.log("ok: ", results[i][0].slice(12, 13));
    console.log("this: ", parseInt(results[i][0].slice(12, 13)));
    // console.log("and: ", typeof(parseInt(results[i][0].slice(12, 13))));
    if (results[i][0].slice(0, 12) === "Los Angeles " && parseInt(results[i][0].slice(12, 13)) != 9) {
      colonIndex = results[i][1].indexOf(":");
      console.log("colonIndex: ", colonIndex);
      num += parseInt(results[i][1].slice(0, colonIndex));
      console.log("points: ", parseInt(results[i][1].slice(0, colonIndex)));
    }
  }
  return num;
}

// function sumArray(array) {
//   var newArray = [];
//   if (array == null) {
//     return 0;
//   } else {
//   newArray = array.sort();
//   newArray.shift();
//   newArray.pop();
//   var sum = newArray.reduce(function(total, num){return total + num}, 0);
//   return sum;
//   }
// }

function sumArray(array) {
  var newArray = [];
  newArray = array.sort(function(a, b){return a-b});
  console.log(newArray);
  newArray.shift();
  console.log("newArray: ", newArray);
  newArray.pop();
  console.log(newArray);
  var sum = newArray.reduce(function(total, num){return total + num}, 0);
  console.log(sum);
  return sum;
}

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
