/***Flattening***/
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce(function(a, b) {
  return a.concat(b);
});

/***Mother child age difference***/
//requires ancestry object, average function and byName object
var diffs = ancestry.map(function(person) {
  if(byName[person.mother]) {
    var mother = byName[person.mother];
    return person.born - mother.born;
  } else {
    return null;
  }
});
diffs = diffs.filter(function(val) {return val != null;});
console.log(average(diffs));

/***Historical Life Expectancy***/
//requires ancestry object and average function
var centuries = {};
ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  var age = person.died - person.born;
  if(centuries[century]) centuries[century].push(age);
  else {
    centuries[century] = [age];
  }
});

for(var century in centuries) {
  console.log(century + ': ' + average(centuries[century]));
}

/***Every and then some***/
//for loop has better efficiency than array method here (due to early return) and is fairly concise
function every(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    if(!func(arr[i])) return false;
  }
  return true;
}

function some(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i])) return true;
  }
  return false;
}