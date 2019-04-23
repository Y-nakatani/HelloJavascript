console.log("nextを実行しただけで返り値が1増える関数");
var count = 0;
function next(){
  return count += 1;
}
console.log(count);
next();
console.log(count);
next();
console.log(count);
next();
console.log(count);

