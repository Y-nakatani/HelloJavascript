console.log("浅いコピーと深いコピーの違い");
var arr = [{x: 2},{y:4}];
var arr2 = [].concat(arr);
console.log(arr2);
arr2[0].x = 123;
console.log(arr2);
console.log(arr[0].x);
console.log("コピー元とコピー先が別のオブジェクトを参照している");

var arr3 = ['e','a','k','B','c'];
console.log(arr3.sort());
console.log("sortしても数値は数値");
var arr4 = ['e','a',3,'B',1];
console.log(arr4.sort());
console.log(typeof(arr4.sort()[0]));
console.log(typeof(arr4.sort()[2]));
