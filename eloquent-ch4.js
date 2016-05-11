/***Sum of a Range***/
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
    if((current >= last && dir >= 1) || (current <= last && dir === -1)) {
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

/***
Reversing an Array
functions and side effects: the reverseArray is a more functional style since it has no side effects,
so is easier to reason about.
However, reverseArrayInPlace is more efficient since it only has to check half the array's length
(rounded down) and doesn't have to create a new array in the process.
***/
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

/***List***/
function LinkedList(val) {
  this.head = val || null;
}

LinkedList.prototype.push = function(val) {
  var node = {
    value: val,
    rest: null
  };
  if(!this.head) {
    this.head = node;
  } else {
    current = this.head;
    while(current.rest) {
      current = current.rest;
    }
    current.rest = node;
  }
}

LinkedList.prototype.toArray = function() {
  var arr = [];
  if(!this.head.rest) {
    arr.push(this.head.value);
    return arr;
  } else {
    current = this.head;
    arr.push(this.head.value);
    while(current.rest) {
      current = current.rest;
      arr.push(current.value);
    }
    return arr;
  }
}

LinkedList.prototype.prepend = function(val) {
  var node = {
    value: val,
    rest: this.head
  };
  this.head = node;
}

function arrayToList(arr) {
  if(!(arr instanceof Array)) throw new Error('input must be an array');
  var list = new LinkedList();
  arr.forEach(function(val) {
    list.push(val);
  });
  return list.head;
}

function listToArray(list) {
  newList = list.head? list : new LinkedList(list);
  return newList.toArray();
}

function prepend(val, list) {
  newList = !(list instanceof LinkedList)? new LinkedList(list) : list;
  newList.prepend(val);
  return newList.head;
}

function nth(list, ind) {
  newList = !(list instanceof LinkedList)? new LinkedList(list) : list;
  return newList.toArray()[ind];
}

function nthRecursive(list, ind) {
  return ind === 0? list.value : nthRecursive(list.rest, ind - 1)
}
/***Deep Comparison***/
function deepEqual(obj1, obj2) {
  var res = true;
  if(Object.keys(obj1).length != Object.keys(obj2).length) return false;
  for(var key in obj1) {
    if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      res = deepEqual(obj1[key], obj2[key]);
    } else {
      if(obj1[key] != obj2[key]) res = false;
    }
  }
  return res;
}

var obj1 = {
  asd: {},
  asdd: 2
}

var obj2 = {
  asd: {},
  asdd: 2,
  asddd: 3
}