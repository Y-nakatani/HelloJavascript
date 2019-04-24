console.log("文字を大文字小文字区別なく順番通りに並びかえる");
var arr = ['e','a','k','B','c'];
console.log(arr.sort(function(a,b){
  return a.toUpperCase() > b.toUpperCase() ? 1 : -1;
}));

