console.log("降順に数値をsort");
var numArray = [20, 100, 3, 35, 0];
console.log(numArray.sort(function(a,b){
  return b - a;
}));
console.log("昇順に数値をsort");
console.log(numArray.sort(function(a,b){
  return a - b;
}));
