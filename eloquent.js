//Sum of a Range
function range(first, last, step) {
  var stepper = typeof step === 'number'? step : 1;
  var dir = Math.sign(last - first);
  //check for valid inputs since this would stack overflow
  //if everything's not right
  if(typeof first !== 'number' || typeof last !== 'number'
     || dir !== Math.sign(stepper) ) {
    throw new Error('inputs must be numbers and direction must be right');
  }
  var arr = [];
  function ranger(current) {
    if(current >= last && dir >= 1) {
      if(current === last) arr.push(last);
      return arr;
    } else if(current <= last && dir === -1) {
      if(current === last) arr.push(last);
      return arr;
    }
    arr.push(current)
    return ranger(current + stepper);
  }
  return ranger(first);
}

function sum(arr) {
  if(!(arr instanceof Array)) throw new Error('input must be an array');
  //probably best if array is all numbers but this does work with other stuff
  return arr.reduce(function(a, b) {return a + b;})
}

/*
Reversing an Array
functions and side effects: the reverseArray is a more functional style since it has no side effects,
so is easier to reason about.
However, reverseArrayInPlace is more efficient since it only has to check half the array's length
(rounded down) and doesn't have to create a new array in the process.
*/
function reverseArray(arr) {
  if(!(arr instanceof Array)) throw new Error('input must be an array');
  var newArr = arr.slice();
  arr.forEach(function(val, ind, arr) {
    newArr[Math.abs(ind - (arr.length - 1))] = val;
  });
  return newArr;
}

function reverseArrayInPlace(arr) {
  if(!(arr instanceof Array)) throw new Error('input must be an array');
  var length = arr.length;
  for(var i = 0; i < Math.floor(length/2); i++) {
    var current = arr[i];
    arr[i] = arr[(length - 1) - i];
    arr[(length - 1) - i] = current;
  }
  return arr;
}